function processSubject(subject) {
  var title = subject.title;
  // 导演
  var directors = subject.directors;
  var directorStr = "";
  for (var key in directors) {
    directorStr += directors[key].name + '/ ';
  }
  if (directorStr != "") {
    directorStr = directorStr.substring(0, directorStr.length - 2);
  }
  //演员
  var casts = subject.casts;
  var castStr = "";
  for (var key in casts) {
    castStr += casts[key].name + '/ ';
  }
  if (castStr != "") {
    castStr = castStr.substring(0, castStr.length - 2);
  }
  //类型
  var genres = subject.genres;
  var genresStr = "";
  for (var key in genres) {
    genresStr += genres[key] + '/ ';
  }
  if (genresStr != "") {
    genresStr = genresStr.substring(0, genresStr.length - 2);
  }
  //发行年份
  var year = subject.year;
  var info = `名称: ${title}\n导演: ${directorStr}\n主演: ${castStr}\n类型: ${genresStr}\n上映时间: ${year}`;
  subject.info = info;
}
function processSubjects(subjects) {
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.processSubject(subject);
  }
}

module.exports = {
  processSubject:processSubject,
  processSubjects:processSubjects
}