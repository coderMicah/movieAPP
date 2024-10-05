import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CalendarIcon, ExternalLinkIcon, MapPinIcon, StarIcon } from "lucide-react"



export default function PersonProfile({ person }: { person: IPersonData }) {
  const getGenderString = (gender: number) => {
    switch (gender) {
      case 0:
        return "Not specified"
      case 1:
        return "Female"
      case 2:
        return "Male"
      default:
        return "Non-binary"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-6">
          <Avatar className="w-32 h-32">
            <AvatarImage src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
            <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-3xl mb-2">{person.name}</CardTitle>
            <CardDescription className="text-lg">
              {person.known_for_department}
              {person.place_of_birth && (
                <span className="flex items-center justify-center sm:justify-start mt-2">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  {person.place_of_birth}
                </span>
              )}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <ul className="space-y-2">
                <li><strong>Birthday:</strong> {formatDate(person.birthday)}</li>
                {person.deathday && <li><strong>Died:</strong> {formatDate(person.deathday)}</li>}
                <li><strong>Gender:</strong> {getGenderString(person.gender)}</li>
                <li className="flex items-center">
                  <StarIcon className="w-4 h-4 mr-2" />
                  <strong>Popularity:</strong> {person.popularity.toFixed(2)}
                </li>
                <li><strong>Adult Content:</strong> {person.adult ? "Yes" : "No"}</li>
              </ul>
              {person.also_known_as.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Also Known As:</h4>
                  <div className="flex flex-wrap gap-2">
                    {person.also_known_as.map((name, index) => (
                      <Badge key={index} variant="secondary">{name}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Biography</h3>
              <ScrollArea className="h-[200px] rounded-md border p-4">
                <p className="text-sm">{person.biography}</p>
              </ScrollArea>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            {person.homepage && (
              <Button asChild>
                <a href={person.homepage} target="_blank" rel="noopener noreferrer">
                  Official Website
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            <Button asChild variant="outline">
              <a href={`https://www.imdb.com/name/${person.imdb_id}`} target="_blank" rel="noopener noreferrer">
                IMDb Profile
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}