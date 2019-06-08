import { combineReducers } from 'redux';

const INITIAL_STATE = {
	gold: 0,
	clicks: 0,
	incrementBy:1,
	firstShop: { goldPerTime: 0, level: 0, price: 10, delay: null },
	secondShop: { goldPerTime: 0, level: 0, price: 10, delay: null },
	thirdShop: { goldPerTime: 0, level: 0, price: 10, delay: null },
	achievements: {
		isAchievementsOn: false,
		// HITS, LEVEL, 
		currentAchievements: ['20 hits', 'Level 10'],
		clickDescriptions: ['20 hits', '50 hits', '100 hits', '1000 hits'],
		FSDescriptions: ['Level 10', 'Level 30', 'Level 50']
	}
};

const friendReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				gold: state.gold + action.incrementBy
			}
		case 'INCREMENT_FIRST_SHOP':
			return {
				...state,
				firstShop: {
					price: state.firstShop.price + action.incrementBy * 2,
					level: state.firstShop.level + action.incrementBy,
					goldPerTime: (state.firstShop.level + action.incrementBy) * 2,
					delay: state.firstShop.delay
				}
			}
		case 'INCREMENT_SECOND_SHOP':
			return {
				...state,
				secondShop: {
					price: state.secondShop.price + action.incrementBy * 2,
					level: state.secondShop.level + action.incrementBy,
					goldPerTime: (state.secondShop.level + action.incrementBy) * 2,
					delay: state.secondShop.delay
				}
			}
		case 'INCREMENT_THIRD_SHOP':
			return {
				...state,
				thirdShop: {
					price: state.thirdShop.price + action.incrementBy * 2,
					level: state.thirdShop.level + action.incrementBy,
					goldPerTime: (state.thirdShop.level + action.incrementBy) * 2,
					delay: state.thirdShop.delay
				}
			}
		case 'DELAY_FIRST_SHOP':
			return {
				...state,
				firstShop: {
					price: state.firstShop.price,
					level: state.firstShop.level,
					goldPerTime: state.firstShop.level,
					delay: action.newDelay
				}
			}
		case 'DELAY_SECOND_SHOP':
			return {
				...state,
				secondShop: {
					price: state.secondShop.price,
					level: state.secondShop.level,
					goldPerTime: state.firstShop.level,
					delay: action.newDelay
				}
			}
		case 'DELAY_THIRD_SHOP':
			return {
				...state,
				thirdShop: {
					price: state.thirdShop.price,
					level: state.thirdShop.level,
					goldPerTime: state.firstShop.level,
					delay: action.newDelay
				}
			}
		case 'SET_ACHIEVEMENTS_ON':
			return {
				...state,
				achievements: {
					...state.achievements,
					isAchievementsOn: action.isOn
				}
			}
		case 'CLICK':
			console.log(state.clicks)
			return {
				...state,
				clicks: state.clicks + 1
			}
		case 'UPDATE_ACHIEVEMENTS':

			return {
				...state,
				clicks: state.clicks + 1
			}
		default:
			return state
	}
};

export default combineReducers({
	reducer: friendReducer,
});