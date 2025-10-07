## Docker installation
Make sure you have installed a docker engine in your machines. After a successifull docker installation, run the below commands to initialize docker in your machines.

## 1.Connect to docker 
Make sure you have the latest code from the remote repo
<code> git pull origin main <code>

Then run this command

<code> docker compose up --build <code>

## 2. Connect to database
Run this command to connect to the database

<code> docker exec -i project_db psql -U myuser -d mydatabase < dump.sql <code>

