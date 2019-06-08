export const simpleAction = () => dispatch => {
	dispatch({
		type: 'SIMPLE_ACTION',
		payload: 'result_of_simple_action'
	})
}

export const increment = x => dispatch => {
	dispatch({
		type: 'INCREMENT',
		incrementBy: x
	})
}
export const levelUpFirstShop = x => dispatch => {
	dispatch({
		type: 'INCREMENT_FIRST_SHOP',
		incrementBy: x
	})
}
export const levelUpSecondShop = x => dispatch => {
	dispatch({
		type: 'INCREMENT_SECOND_SHOP',
		incrementBy: x
	})
}
export const levelUpThirdShop = x => dispatch => {
	dispatch({
		type: 'INCREMENT_THIRD_SHOP',
		incrementBy: x
	})
}
export const setDelayFS = x => dispatch => {
	dispatch({
		type: 'DELAY_FIRST_SHOP',
		newDelay: x
	})
}
export const setDelaySS = x => dispatch => {
	dispatch({
		type: 'DELAY_SECOND_SHOP',
		newDelay: x
	})
}
export const setDelayTS = x => dispatch => {
	dispatch({
		type: 'DELAY_THIRD_SHOP',
		newDelay: x
	})
}
export const setAchievementsOn = x => dispatch => {
	dispatch({
		type: 'SET_ACHIEVEMENTS_ON',
		isOn: x
	})
}
export const updateAchievements = () => dispatch => {
	dispatch({
		type: 'UPDATE_ACHIEVEMENTS',
	})
}
