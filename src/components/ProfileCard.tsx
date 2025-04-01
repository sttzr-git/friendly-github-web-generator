
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Users } from "lucide-react";

interface ProfileCardProps {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
}

const ProfileCard = ({
  name,
  username,
  avatarUrl,
  bio,
  location,
  followers,
  following,
}: ProfileCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Avatar className="h-20 w-20 border-2 border-border">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-muted-foreground">{username}</p>
            </div>
          </div>
          <div>
            <p className="text-sm">{bio}</p>
          </div>
          <Button variant="outline" className="w-full">Follow</Button>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <Link to="/" className="text-github-blue hover:underline">
              <span className="font-semibold text-foreground">{followers}</span> followers
            </Link>
            <span>·</span>
            <Link to="/" className="text-github-blue hover:underline">
              <span className="font-semibold text-foreground">{following}</span> following
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
