/**
 * 描述： 操作reducer的公共方法
 * @author Kevin
 * @date 2023/9/20
 */

/**
 * 创建一个reducer，暂时不用，用官方 toolkit包里的 createReducer
 * @param initialState
 * @param handlers
 * @returns {(function(*=, *=): (*))|*}
 */
function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action)
		} else {
			return state
		}
	}
}

export default createReducer;
