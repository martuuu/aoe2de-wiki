import TransitionLink from "@/components/transition-link";
import {
  ArrowLeft,
  Trophy,
  Twitch,
  Youtube,
  Globe,
  Twitter,
  DiscIcon as Discord,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CommunityPage() {
  // Datos actualizados del ranking
  const topPlayers = [
    {
      rank: 1,
      name: "GL.Hera",
      country: "Canadá",
      highestElo: 3009,
      elo: 2982,
      winRate: "72.12%",
      wins: 3738,
      losses: 1445,
      totalGames: 5183,
      streak: 7
    },
    {
      rank: 2,
      name: "wR. Hearttt",
      country: "China",
      highestElo: 2940,
      elo: 2857,
      winRate: "65.28%",
      wins: 3146,
      losses: 1673,
      totalGames: 4819,
      streak: null
    },
    {
      rank: 3,
      name: "mYi.ACCM",
      country: "Vietnam",
      highestElo: 2892,
      elo: 2818,
      winRate: "68.47%",
      wins: 2758,
      losses: 1270,
      totalGames: 4028,
      streak: 3
    },
    {
      rank: 4,
      name: "TAG_MbL_",
      country: "Noruega",
      highestElo: 2955,
      elo: 2805,
      winRate: "66.34%",
      wins: 5198,
      losses: 2637,
      totalGames: 7835,
      streak: 1
    },
    {
      rank: 5,
      name: "_LY_抖音肥龙",
      country: "China",
      highestElo: 2848,
      elo: 2786,
      winRate: "66.97%",
      wins: 436,
      losses: 215,
      totalGames: 651,
      streak: null
    },
    {
      rank: 6,
      name: "Oni.Liereyy",
      country: "Austria",
      highestElo: 2901,
      elo: 2772,
      winRate: "66.58%",
      wins: 1004,
      losses: 504,
      totalGames: 1508,
      streak: 3
    },
    {
      rank: 7,
      name: "wR.Sebastian",
      country: "Chile",
      highestElo: 2915,
      elo: 2772,
      winRate: "57.01%",
      wins: 1794,
      losses: 1353,
      totalGames: 3147,
      streak: null
    },
    {
      rank: 8,
      name: "TAG_Sitaux",
      country: "Francia",
      highestElo: 2781,
      elo: 2767,
      winRate: "71.21%",
      wins: 1472,
      losses: 595,
      totalGames: 2067,
      streak: 9
    },
    {
      rank: 9,
      name: "wR.Nicov",
      country: "Argentina",
      highestElo: 2885,
      elo: 2766,
      winRate: "68.69%",
      wins: 1858,
      losses: 847,
      totalGames: 2705,
      streak: 4
    },
    {
      rank: 10,
      name: "Oni.Lewis",
      country: "Reino Unido",
      highestElo: 2803,
      elo: 2737,
      winRate: "52.73%",
      wins: 3192,
      losses: 2862,
      totalGames: 6054,
      streak: null
    }
  ];

  const streamers = [
    {
      name: "TheViper",
      platform: "Twitch",
      icon: Twitch,
      url: "https://www.twitch.tv/theviper",
      description:
        "El mejor jugador de AoE2 de todos los tiempos, conocido por su micro impecable y toma de decisiones.",
    },
    {
      name: "T90Official",
      platform: "Youtube",
      icon: Youtube,
      url: "https://www.youtube.com/c/T90Official",
      description:
        "Famoso caster y creador de contenido, conocido por sus series 'Low ELO Legends' y comentarios de torneos.",
    },
    {
      name: "Hera",
      platform: "Twitch",
      icon: Twitch,
      url: "https://www.twitch.tv/hera",
      description:
        "Jugador de élite y creador de guías detalladas para mejorar en el juego.",
    },
    {
      name: "Spirit Of The Law",
      platform: "Youtube",
      icon: Youtube,
      url: "https://www.youtube.com/c/SpiritOfTheLaw",
      description:
        "Análisis matemáticos y detallados de mecánicas del juego y civilizaciones.",
    },
    {
      name: "MembTV",
      platform: "Twitch",
      icon: Twitch,
      url: "https://www.twitch.tv/membtv",
      description:
        "Caster y organizador de torneos, conocido por su entusiasmo y conocimiento del juego.",
    },
    {
      name: "Ornlu",
      platform: "Youtube",
      icon: Youtube,
      url: "https://www.youtube.com/c/Ornlu_AOE",
      description:
        "Creador de contenido educativo y comentarista de partidas profesionales.",
    },
  ];

  const communities = [
    {
      name: "AoE2.net",
      icon: Globe,
      url: "https://aoe2.net",
      description:
        "El sitio más completo con estadísticas, rankings y seguimiento de partidas en tiempo real.",
    },
    {
      name: "Reddit r/aoe2",
      icon: Globe,
      url: "https://www.reddit.com/r/aoe2/",
      description:
        "La comunidad más grande de Age of Empires 2 en Reddit, con discusiones diarias y memes.",
    },
    {
      name: "Discord Oficial",
      icon: Discord,
      url: "https://discord.gg/ageofempires",
      description:
        "El servidor oficial de Discord para Age of Empires, con canales específicos para AoE2.",
    },
    {
      name: "AoEZone",
      icon: Globe,
      url: "https://www.aoezone.net/",
      description:
        "Foro dedicado a Age of Empires con discusiones sobre estrategias y torneos.",
    },
    {
      name: "Twitter #AoE2",
      icon: Twitter,
      url: "https://twitter.com/hashtag/AoE2",
      description:
        "Sigue las últimas noticias y discusiones sobre Age of Empires 2 en Twitter.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <TransitionLink href="/">
          <Button variant="ghost" className="flex items-center gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Volver al Inicio
          </Button>
        </TransitionLink>
      </div>

      <header className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
          Comunidad
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
         Este recurso nunca hubiese sido posible sin la cantidad de documentación, videos, tutoriales y horas de streaming que la comunidad ha aportado. Aquí encontrarás una lista de los mejores streamers, comunidades y jugadores de AoE2. Gracias a todos! 😃
        </p>
      </header>

      <Tabs defaultValue="streamers" className="mb-8">
        <TabsList className="mb-4 flex w-full justify-center space-x-2">
          <TabsTrigger value="streamers">Streamers y Creadores</TabsTrigger>
          <TabsTrigger value="communities">Comunidades</TabsTrigger>
          <TabsTrigger value="ranking">Top 10 Jugadores</TabsTrigger>
        </TabsList>

        <TabsContent value="streamers" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {streamers.map((streamer, index) => (
              <a
                key={index}
                href={streamer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02]"
              >
                <Card className="flex flex-col h-full">
                  <CardHeader className="bg-accent/30 pb-3">
                    <div className="flex items-center gap-2">
                      <streamer.icon
                        className={`h-5 w-5 ${
                          streamer.platform === "Twitch"
                            ? "text-purple-500"
                            : "text-red-500"
                        }`}
                      />
                      <CardTitle className="text-xl">{streamer.name}</CardTitle>
                    </div>
                    <CardDescription>{streamer.platform}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 pt-4">
                    <p className="text-muted-foreground flex-1">
                      {streamer.description}
                    </p>
                    <Button variant="outline" className="w-full mt-4">
                      Visitar Canal
                    </Button>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="communities" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communities.map((community, index) => (
              <a
                key={index}
                href={community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02]"
              >
                <Card className="flex h-full flex-col overflow-hidden">
                  <CardHeader className="bg-accent/30 pb-3 h-[60px]">
                    <div className="flex items-center gap-2">
                      <community.icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">
                        {community.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow pt-4">
                    <p className="text-muted-foreground">
                      {community.description}
                    </p>
                    <Button variant="outline" className="mt-auto w-full">
                      Visitar Sitio
                    </Button>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ranking" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <CardTitle>Top 10 Jugadores Ranked</CardTitle>
              </div>
              <CardDescription>
                Clasificación actual de los mejores jugadores del mundo (Actualizado: Marzo 2025)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-2 py-2 text-left">Rank</th>
                      <th className="px-2 py-2 text-left">Jugador</th>
                      <th className="px-2 py-2 text-left">ELO</th>
                      <th className="px-2 py-2 text-left">Win Rate</th>
                      <th className="px-2 py-2 text-left">Partidas</th>
                      <th className="px-2 py-2 text-left">Racha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPlayers.map((player) => (
                      <tr key={player.rank} className="border-b hover:bg-accent/10">
                        <td className="px-2 py-2">
                          {player.rank === 1 ? (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-white">
                              {player.rank}
                            </span>
                          ) : player.rank === 2 ? (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-white">
                              {player.rank}
                            </span>
                          ) : player.rank === 3 ? (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-700 text-white">
                              {player.rank}
                            </span>
                          ) : (
                            player.rank
                          )}
                        </td>
                        <td className="px-2 py-2">
                          <div className="font-medium">{player.name}</div>
                          <div className="text-xs text-muted-foreground">{player.country}</div>
                        </td>
                        <td className="px-2 py-2">
                          <div className="font-medium">{player.elo}</div>
                          <div className="text-xs text-muted-foreground">Máx: {player.highestElo}</div>
                        </td>
                        <td className="px-2 py-2">
                          <div className="font-medium">{player.winRate}</div>
                          <div className="text-xs text-muted-foreground">{player.wins}W / {player.losses}L</div>
                        </td>
                        <td className="px-2 py-2">{player.totalGames}</td>
                        <td className="px-2 py-2">
                          {player.streak ? (
                            <span className={`font-medium ${player.streak > 0 ? "text-green-600" : "text-red-600"}`}>
                              {player.streak > 0 ? "+" : ""}{player.streak}
                            </span>
                          ) : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-xs text-muted-foreground text-right">
                Fuente: aoe2.net - Datos de RM 1v1
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
