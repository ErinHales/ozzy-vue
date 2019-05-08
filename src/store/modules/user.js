import * as types from '../mutation-types'

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
  [types.SET_PROFILE_DATA] (state, data) {
    Object.assign(state.profileData, data)
  },
  [types.SET_ADDRESS] (state, address) {
    Object.assign(state.address, address)
  }
}

const actions = {
  setStatus ({ commit }, status) {
    commit(types.SET_STATUS, status)
  },
  seekingChildCare ({ commit }, value) {
    commit(types.SEEKING_CHILD_CARE, value)
  },
  subscribe ({ commit }, arr) {
    commit(types.SUBSCRIBE, arr)
  },
  setProfile ({ commit }, url) {
    commit(types.SET_PROFILE, url)
  },
  setCareType ({ commit }, type) {
    commit(types.SET_CARE_TYPE, type)
  },
  setProfileData ({ commit }, data) {
    commit(types.SET_PROFILE_DATA, data)
  },
  setAddress ({ commit }, address) {
    commit(types.SET_ADDRESS, address)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
