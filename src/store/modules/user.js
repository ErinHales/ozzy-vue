import * as types from '../../mutation-types'

// import { appStorage } from '@/utils'

const state = {
  status: '', // Parent or Care Provider
  seekingChildCare: false, // Yes or no
  subscribedChannels: [], // Array of subscribed channels
  profilePicture: '', // URL string for profile picture
  careProviderType: '', // String of type ie.  School, Day Care, Preschool, Baby Sitter, Nanny
  profileData: {
    name: '', // Full Name
    bio: '', // Long bio on profile
    summary: '' // Short summary that shows near picture
  },
  address: {
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: ''
  }
}

const mutations = {
  [types.SET_STATUS] (state, value) {
    state.status = value
  },
  [types.SEEKING_CHILD_CARE] (state, value) {
    state.seekingChildCare = value
  },
  [types.SUBSCRIBE] (state, arr) {
    state.subscribedChannels = arr
  },
  [types.SET_PROFILE] (state, url) {
    state.profilePicture = url
  },
  [types.SET_CARE_TYPE] (state, type) {
    state.careProviderType = type
  },
  [type.SET_PROFILE_DATA] (state, data) {
    state.profileData.name = data.name
    Object.assign(state.profileData, data)
  },
  [type.SET_ADDRESS] (state, address) {
    Object.assign(state.address, address)
  }
}

// const actions = {
//   agreeToTerms () {
//     return new Promise((resolve) => {
//       const date = new Date()
//       appStorage.setItem('agreeToTOS', date)
//       trackAgreeTOSClick(date)
//       return resolve(date)
//     })
//   },

//   startApplication ({ dispatch }) {
//     const hasSetup = appStorage.getItem('userSetupComplete')

//     if (!hasSetup) {
//       dispatch('setupUser')
//     } else {
//       dispatch('getListingsAndPrevouts')
//     }
//   },

//   async getListingsAndPrevouts ({ dispatch }) {
//     await dispatch('listings/getETHListings', null, { root: true })
//     dispatch('wallet/btc/listPrevouts', null, { root: true })
//   },

//   /**
//    * 1/2 setup_user - Sets up user in db. Should only ever called once.
//    */
//   setupUser ({ dispatch, state }) {
//     const payload = {
//       method: 'setup_user',
//       request_name: 'setupUser',
//       args: {
//         secret_phrase: state.auth.secret_phrase
//       }
//     }

//     dispatch('sockets/sendBidderRequest', payload, { root: true })
//   },

//   /**
//    * 2/2 setup_user - After user is setup, seed phrase is returned
//    * @param {String} socketResponse - seed phrase
//    */
//   processSetupUser ({ commit, dispatch }, socketResponse) {
//     if (socketResponse.res) {
//       commit(types.SET_HAS_SETUP, true)
//       appStorage.setItem('userSetupComplete', new Date())
//     } else if (socketResponse.error === 'User already exists in DB. Refusing to overwrite.') {
//       appStorage.setItem('userSetupComplete', new Date())
//       commit(types.SET_HAS_SETUP, true)
//     }

//     dispatch('getListingsAndPrevouts')
//   },
const actions = {
  setStatus({ commit }, status) {
    commit(types.SET_STATUS, status)
  },
  seekingChildCare({ commit }, value) {
    commit(types.SEEKING_CHILD_CARE, value)
  },
  subscribe({ commit }, arr) {
    commit(types.SUBSCRIBE, arr)
  },
  setProfile({ commit }, url) {
    commit(types.SET_PROFILE, url)
  },
  setCareType({ commit }, type) {
    commit(types.SET_CARE_TYPE, type)
  },
  setProfileData({ commit }, data) {
    commit(types.SET_PROFILE_DATA, data)
  },
  setAddress({ commit }, address) {
    commit(types.SET_ADDRESS, address)
  }
}

//   openSetupModal ({ commit }, open) {
//     commit(types.OPEN_SETUP_MODAL, open)
//   },

//   openNewWalletModal ({ commit }, open) {
//     commit(types.OPEN_NEW_WALLET_MODAL, open)
//   },

//   changeTheme ({ commit }, theme) {
//     if (theme === 'dark') {
//       appStorage.setItem('userColorTheme', 'dark')
//     } else {
//       appStorage.setItem('userColorTheme', 'light')
//     }
//     commit(types.CHANGE_THEME, theme)
//   }
// }

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
