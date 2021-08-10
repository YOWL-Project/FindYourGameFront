import Vue from "vue";
import Vuex from "vuex";
import games from './modules/games';
import authentification from './modules/authentification';
import comments from './modules/comments';
import topics from './modules/topics';
import votesComments from './modules/votesComments';
import votesGames from './modules/votesGames';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // variales globales + erreurs via this.route.state
  },
  // mutations: {},
  // actions: {},
  modules: {
    games,
    authentification,
    comments,
    topics,
    votesComments,
    votesGames,
    users,
  },
});
