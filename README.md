# Paws-and-Dogs
My first full-stack application (dog based)

Problem: My family and I have a huge collection of dogs some past and mostly present, with a few family-friend's companions included as well.

General App Idea/Purpose: An ap that will allow me to catalogue all of my dogs as well as provied a brief background on them. 

Who would like to use it: Dog Lovers, Curious Potential Dog Owners

7 Restful Routes:
Index   -> GET       -> /dogs          -> List of all the dogs on database
Show    -> GET       -> /dogs/:id      -> Info about 1 dog, (dog clicked on)
New     -> GET       -> /dogs/new      -> Shows form to enter new dog info
Create  -> POST      -> /dogs          -> Creates dog on server
Edit    -> GET       -> /dogs/:id/edit -> Get prefilled form for user to change
Update  -> PUT/PATCH -> /dogs/:id      -> Updates the data from 'edit' on server
Destroy -> DELETE    -> /dogs/:id      -> Removes Dog (id) from the server

-- Home Page -> '/' -> Will show an intro page with the wonderful Huncho. (if applicable)

User Stories: 

-- When the user enters localhost3000/ they will see the home page with a brief introduction, a link to see all of the dogs on file and, a create new dog button. 

-- When the user clicks the create new dog button the will be redirected to the New page, where there will be a form available to populate with their dog's information. As long with a back button/link to go back to the home screen and/or index page.

-- When the user clicks the tab/link to see all dogs, they will be directed to the Index page where it lists all the dogs on server. 

-- When the user clicks onto a specific dog, by name, they will be directed to the dog (id) Show page

-- On the Dog's Show Page the user will have the option to create new dog, edit the current dog, go back to the index screen, or go back to the home screen.

-- When the user clicks on the edit link the will directed to the edit page where they will be able to change a prefilled form about the dog after clicking the submit changes button

-- The user will be able to navigate back from any given screen, with the home screen in exception.

MODELS:
const dogSchema = new Schema({
    name: {type: String, required: true },
    breed: {type: String, required: true}, 
    description: { type: String, required: true },
    img: String,
    age: { type: Number, min: 0 },
    loveable: { type: Number, min: 0, max: 10 }
});

Wireframes:
Are in the wireframe directory/folder <---------