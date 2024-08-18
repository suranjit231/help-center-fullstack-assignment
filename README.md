# Help Center API Assignment
The Help Center API Assignment is a full-stack application featuring a responsive interface for creating, viewing, and searching help center cards. Built with React and Redux on the frontend, Node.js and Express on the backend, and MongoDB as the database, it allows users to submit requests and manage cards seamlessly.

## Tech Stack

- **Frontend**: React, Redux, react-router-dom
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Configuration and Setup

A. **Clone the Repository:**
   ```bash
   git clone https://github.com/suranjit231/help-center-fullstack-assignment.git
   cd help-center-fullstack-assignment
   ```

B. **Backend:**
1. Open terminal and navigate to the backend directory present in (fullstack-assignment/backend):
- **cd backend**
2. Install dependencies:
- **npm install**
3. Configure your database URL and port in the backend .env file:
```
PORT=3200
DB_URL=your_mongodb_connection_string
```

C. **Frontend:**
1. Open terminal and navigate to the backend directory present in (fullstack-assignment/frontend):
- **cd frontend**
2. Install dependencies:
- **npm install**
3. Configure your backend url for api request in the frontend .env file:
```
REACT_APP_API_URL:http://localhost:5000
```
4. **run frontend**
```
npm start
```
## Usage
1. Once the frontend starts running, you will be redirected to the home page.
2. Initially, no cards will be available.
3. to create a new card:
   - Click the "Submit a request" button in the navbar.
   - You will be redirected to the create cards form page.
4. After creating some cards, click on "Help Center":
   - You will be redirected back to the home page where all help center cards will be displayed.
5. To search for a single card by its title:
   - Enter the card title in the search bar.
   - The corresponding card will be displayed.


---

