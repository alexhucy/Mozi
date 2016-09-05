/**
 * Created by Alex on 16/9/4.
 */
export default {
	created () {
		this.uuid = Math.random().toString(36).substring(3, 8)
	}
}
