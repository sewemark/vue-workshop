<template>
  <div id="app">
    <base-list :items="articleItems" />
    <base-list :items="imageItems" />
    <base-list :items="eventItems" />
  </div>
</template>

<script>
import BaseList from "./components/BaseList.vue";

export default {
  name: "app",
  data() {
    return {
      articleItems: [
        {
          type: "Article",
          time: "05 October 2019 14:48",
          author: "Jon doe",
          description: "Lorem Ipsum Lorem Ipsum",
          text:
            "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker"
        },
        {
          type: "Article",
          time: "05 October 2019 14:48",
          author: "Jon doe",
          description: "Lorem Ipsum Lorem Ipsum",
          text:
            "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker"
        },
        {
          type: "Article",
          time: "05 October 2019 14:48",
          author: "Jon doe",
          description: "Lorem Ipsum Lorem Ipsum",
          text:
            "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker"
        }
      ],
      imageItems: [
        {
          type: "ImagePost",
          time: "06 October 2020 14:48",
          author: "Anna Kowalska",
          imageUrl: "https://picsum.photos/id/278/600/600",
          description: "Hello, hello "
        },
        {
          type: "ImagePost",
          time: "06 October 2020 14:48",
          author: "Anna Kowalska",
          imageUrl: "https://picsum.photos/id/278/600/600",
          description: "Hello, hello "
        }
      ],
      eventItems: [
        {
          type: "Event",
          time: "07 October 2020 14:48",
          author: "Evenea",
          eventTime: "10 October 2020 20:00",
          participants: 10,
          description: "It event, very important event",
          tags: ["it", "programming", "ts/js"]
        },
        {
          type: "Event",
          time: "17 October 2020 14:48",
          author: "GSD Meetup",
          eventTime: "12 October 2020 20:00",
          participants: 20,
          description: "gsd meetup!",
          tags: ["it", "gsd", "meetup"]
        }
      ]
    };
  },
  components: {
    BaseList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
