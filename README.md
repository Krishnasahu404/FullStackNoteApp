# FullStackNoteApp


## Description
This is a full-stack CRUD (Create, Read, Update, Delete) application for managing notes. It is built using Django for the backend and React for the frontend.

## Project Structure
- **notes_project/**: Contains the Django backend.
- **notesenv/**: Python virtual environment for the Django project.
- **react-notes-app/**: Contains the React frontend.

## Features
- Create, Read, Update, and Delete notes
- Responsive design
- RESTful API with Django REST Framework
- Real-time updates with React

## Tech Stack
- **Frontend:** React, React Router, Axios
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (Django's built-in)
- **Styling:** CSS, Bootstrap 

## Installation

### Prerequisites
- Python 3.x
- Node.js and npm
- Git

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Krishnasahu404/FullStackNoteApp.git
   cd FullStackNoteApp/notes_project

   
2. Create a virtual environment:
      python -m venv notesenv

3. Activate the virtual environment:
      notesenv\Scripts\activate

4. Install the required packages:
      pip install -r requirements.txt

5. Run database migrations:
      python manage.py migrate

6. Start the Django server:
       python manage.py runserver

### Frontend Setup

1. Navigate to the React application directory:
      cd ../react-notes-app

2. Install the frontend dependencies:
      npm install

3. Start the React application:
      npm run dev
   
4. Access the application at http://localhost:3000.



    
