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
  const topPlayers = [
    {
      rank: 1,
      name: "TheViper",
      country: "Noruega",
      elo: 2650,
      winRate: "68%",
    },
    { rank: 2, name: "Hera", country: "Canadá", elo: 2620, winRate: "67%" },
    { rank: 3, name: "Liereyy", country: "Austria", elo: 2610, winRate: "65%" },
    { rank: 4, name: "TaToH", country: "España", elo: 2590, winRate: "64%" },
    { rank: 5, name: "DauT", country: "Serbia", elo: 2580, winRate: "63%" },
    { rank: 6, name: "MbL", country: "Noruega", elo: 2570, winRate: "62%" },
    { rank: 7, name: "Yo", country: "China", elo: 2560, winRate: "61%" },
    {
      rank: 8,
      name: "TheMax",
      country: "Finlandia",
      elo: 2550,
      winRate: "60%",
    },
    {
      rank: 9,
      name: "Villese",
      country: "Finlandia",
      elo: 2540,
      winRate: "59%",
    },
    { rank: 10, name: "ACCM", country: "Vietnam", elo: 2530, winRate: "58%" },
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
          Conéctate con la vibrante comunidad de Age of Empires II, sigue a los
          mejores jugadores y creadores de contenido, y mantente al día con los
          últimos eventos y torneos.
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
            <CardHeader className="h-[88px]">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <CardTitle>Top 10 Jugadores Ranked</CardTitle>
              </div>
              <CardDescription>
                Clasificación actual de los mejores jugadores del mundo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">Rank</th>
                      <th className="px-4 py-2 text-left">Jugador</th>
                      <th className="px-4 py-2 text-left">País</th>
                      <th className="px-4 py-2 text-left">ELO</th>
                      <th className="px-4 py-2 text-left">Win Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPlayers.map((player) => (
                      <tr key={player.rank} className="border-b">
                        <td className="px-4 py-2">
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
                        <td className="px-4 py-2 font-medium">{player.name}</td>
                        <td className="px-4 py-2">{player.country}</td>
                        <td className="px-4 py-2">{player.elo}</td>
                        <td className="px-4 py-2">{player.winRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
