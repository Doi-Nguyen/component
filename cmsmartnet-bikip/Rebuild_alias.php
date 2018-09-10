<?php

define('_JEXEC', 1);
define('JPATH_BASE', realpath(dirname(dirname(__FILE__) . '/')));
define('DS', DIRECTORY_SEPARATOR);
require_once ( JPATH_BASE . DS . 'includes' . DS . 'defines.php' );
require_once ( JPATH_BASE . DS . 'includes' . DS . 'framework.php' );
$mainframe = JFactory::getApplication('site');

$table = array('#__cmsmart_product_comments', '#__cmsmart_product_faq');
foreach ($table as $a) {
    $list_faq = list_faq($a);

    foreach ($list_faq as $key => $value) {
        $alias = alias($value['title']);
        if (!checkAlias($alias, $value['id'])) {
            $alias = $alias . '-' . $value['id'];
            update_alias($alias, $value['id'],$a);
        } else {
            update_alias($alias, $value['id'],$a);
        }
    }
}

function list_faq($a) {

    $db = JFactory::getDbo();
    $query = $db->getQuery(true);
    $query->select('id,title,alias')
            ->from($a);
    $db->setQuery($query);
    return $db->loadAssocList();
}

function alias($value) {
    $arr = array(
        'a' => 'à|ả|ã|á|ạ|ă|ằ|ẳ|ẵ|ắ|ặ|â|ầ|ẩ|ẫ|ấ|ậ',
        'd' => 'đ',
        'e' => 'è|ẻ|ẽ|é|ẹ|ê|ề|ể|ễ|ế|ệ',
        'i' => 'ì|ỉ|ĩ|í|ị',
        'o' => 'ò|ỏ|õ|ó|ọ|ô|ồ|ổ|ỗ|ố|ộ|ơ|ờ|ở|ỡ|ớ|ợ',
        'u' => 'ù|ủ|ũ|ú|ụ|ư|ừ|ử|ữ|ứ|ự',
        'y' => 'ỳ|ỷ|ỹ|ý|ỵ',
    );
    $newValue = mb_strtolower(trim($value), 'utf-8');
    foreach ($arr as $key => $val) {
        $pattern = '#(' . $val . ')#imu';
        $newValue = preg_replace($pattern, $key, $newValue);
    }
    $newValue = preg_replace('#[^0-9a-zA-Z\s\-]#i', '', $newValue);
    $newValue = preg_replace('#(\s)+#im', '-', $newValue);
    return $newValue;
}

function checkAlias($alias, $id) {
    $db = JFactory::getDbo();
    $query = $db->getQuery(true);
    $query->select('count(id)')
            ->from("#__cmsmart_product_faq")
            ->where('alias=' . $db->quote($alias))
            ->where('id !=' . $id);
    $db->setQuery($query);
    $result = $db->loadResult();
    if ($result > 0) {
        return false;
    }
    return true;
}

function update_alias($alias, $id,$a) {
    $db = JFactory::getDbo();
    $query = $db->getQuery(true);
    $query->update($a)
            ->set('alias=' . $db->quote($alias))
            ->where('id=' . $db->quote($id));
    $db->setQuery($query);
    $db->execute();
    echo 'update alias ' . $id;
}
