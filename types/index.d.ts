declare type UserType = "creator" | "editor" | "viewer";

declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type RoomAccesses = Record<string, AccessType>;

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type CollaboratorProps = {
  roomId: string;
  email: string;
  creatorId: string;
  collaborator: User;
  user: User;
};

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: User[];
  currentUserType: UserType;
};
