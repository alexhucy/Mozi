/**
 * Created by Alex on 16/6/23.
 */

export default function (value) {
	if (value == undefined )return ''
  var date = new Date(value)
  return value ? date.getFullYear().toString() + '-' +
    (date.getMonth() + 1).toString() + '-' +
        date.getDate().toString()
        : '无'
}
