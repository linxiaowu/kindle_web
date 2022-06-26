function update() {
    var date = new Date()
    var utc8DiffMinutes = date.getTimezoneOffset() + 480
    date.setMinutes(date.getMinutes() + utc8DiffMinutes)

    var timeString = date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2)
    var dateString = (date.getMonth() + 1) + '月' + date.getDate() + '日'
    var weekList = ['日', '一', '二', '三', '四', '五', '六']
    var weekString = '星期' + weekList[date.getDay()]

    document.getElementById("time").innerHTML = timeString
    document.getElementById("date").innerHTML = dateString
    document.getElementById("week").innerHTML = weekString
}

update()
setInterval("update()", 60 * 1000)