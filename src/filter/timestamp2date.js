/**
 * Created by Alex on 16/6/23.
 */

export default function (value) {
  var date = new Date(value)
  return value ? date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' +
        date.getDate()
        : '无'
}
