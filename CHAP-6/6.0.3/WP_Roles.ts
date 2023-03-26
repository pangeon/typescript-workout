type User = {
    id: number,
    email: string,
    nickname: string
    lastLogin: Date;
}

type SubscriberPermissions = {
    readPost: boolean;
    commentOnPost: boolean;
}

type ContributorPermissions = {
    editAndDeleteOwnPosts: boolean;
}

type AuthorPermissions = {
    publishOwnPosts: boolean;
    uploadFilesToMediaLibrary: boolean;
}

type EditorPermissions = {
    publishEditAndDeleteAnyPostOrPage: boolean;
    manageCategories: boolean;
    moderateComments: boolean;
}

type AdministratorPermissions = {
    managePluginsAndWidgets: boolean;
    addOrRemoveUsers: boolean;
    editThemes: boolean;
}
type Subscriber = User & SubscriberPermissions;
type Contributor = User & SubscriberPermissions & ContributorPermissions;
type Author = User & SubscriberPermissions & ContributorPermissions & AuthorPermissions;
type Editor = User & SubscriberPermissions & ContributorPermissions & AuthorPermissions & EditorPermissions;
type Admin = User & SubscriberPermissions & ContributorPermissions & AuthorPermissions & EditorPermissions & AdministratorPermissions;


const cecherzAdmin: Admin = {
        // User properties
        email: "pangeon@tlen.pl",
        id: 0,
        nickname: "RunnerCap",
        lastLogin: new Date(),

        // Permissions
        addOrRemoveUsers: true,
        commentOnPost: true,
        editAndDeleteOwnPosts: true,
        editThemes: true,
        manageCategories: true,
        managePluginsAndWidgets: true,
        moderateComments: true,
        publishEditAndDeleteAnyPostOrPage: true,
        publishOwnPosts: true,
        readPost: true,
        uploadFilesToMediaLibrary: true
    };

const contributorAgnieszka: Contributor = {
    // User properties
    email: "agnieszka.lasota1@vp.pl",
    id: 1,
    nickname: "speedCe",
    lastLogin: new Date(),
    // Permissions
    readPost: true,
    commentOnPost: true,
    editAndDeleteOwnPosts: true,


}
console.log(cecherzAdmin);
console.log(contributorAgnieszka);

