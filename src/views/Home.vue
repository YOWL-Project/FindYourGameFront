<template>
  <div class="home">
    <img
      class="m-4 align-self-center"
      alt="Logo FindYourGame"
      src="../assets/Logo.svg"
      width="172"
      height="157"
    />
    <div class="content container text-left">
      <div>
        <h1><span class="plus">+</span> Welcome <span>USER</span></h1>
      </div>
      <form style="position: relative">
        <input
          type="text"
          class="form-control"
          name="search"
          id="search"
          placeholder="Wich game are yoour looking for ?"
        />
        <img
          style="
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            cursor: pointer;
          "
          src="../assets/search_black_24dp.svg"
          alt=""
          width="30px"
        />
      </form>
      <div>
        <h2>TRENDING GAMES ON DISCUSSIONS</h2>
        <div id="trendinggames">
          <img src="../assets/arrow-right.svg" alt="" width="20px" />
        </div>
      </div>
      <div>
        <h2>CHECK THE HOT TOPICS</h2>
        <div id="hottopics">
          <p>
            See all topics
            <img src="../assets/arrow-right.svg" alt="" width="20px" />
          </p>
        </div>
      </div>
      <div>
        <h2>FRESH OFF THE BAKERY</h2>
        <div id="commentsnew"></div>
      </div>
      <div>
        <h2>BEST NEW GAMES</h2>
        <div id="newgames">
          <img src="../assets/arrow-right.svg" alt="" width="20px" />
        </div>
        <p>
          See all the new games
          <img src="../assets/arrow-right.svg" alt="" width="20px" />
        </p>
      </div>
      <div>
        <h2>GREATEST OF ALL TIMES !</h2>
        <div id="bestratedgames">
          <img src="../assets/arrow-right.svg" alt="" width="20px" />
        </div>
        <p>
          See all the best rated games
          <img src="../assets/arrow-right.svg" alt="" width="20px" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
