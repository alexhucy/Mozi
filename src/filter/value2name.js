/**
 * Created by Alex on 16/8/30.
 */

var map = require('array-map')
var find = require('array-find')

export default function (value, list) {
	let rs = map(value, (one, index) => {
		return find(list, item => {
			return item.value === one
		})
	})
	return map(rs, one => {
		return one.name
	}).join(' ').replace('--', '')
}
