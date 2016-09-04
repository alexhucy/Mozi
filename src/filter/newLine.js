/**
 * Created by Alex on 16/9/1.
 */

export default function (str) {
	var regRN = /\r\n|\r|\n/g;
	return str?str.replace(regRN,"<br />"):''
}

