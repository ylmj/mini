function hasSensitiveWords(str) {
  if(str == '' || str == undefined) return false;
  var words = '台独,藏独,港独,操你妈,滚,垃圾,妓,张哲瀚,张恒,耶稣,混蛋,浑蛋,scoundrel,bitch,blackguard,屁';  // 常用敏感词，请自己添加
  var array = words.split(','), len = array.length;
  for (var i = 0; i < len; i++) {
    var item = array[i];
    if (str.indexOf(item) >= 0 && item != '') {
      return true;
    }
  }
  return false;
}
export default hasSensitiveWords