# Citi-Bike-Visualization
### Description
Bike sharing systems have become an increasingly popular mode of transportation in urban areas worldwide, with a growing number of cities implementing them to promote sustainable mobility and reduce traffic congestion. However, one of the most significant challenges facing bike sharing systems is ensuring bikes are available when and where they are needed most. To address this challenge, the project proposes the use of a multi-agent system that analyzes historical data and makes predictions about future bike demand for each station. This is a visualization project which will provide users with information on the usage of the Citi Bike bicycles and analysis which provides a visual representation of the analysis, statistics and future inference of Citi Bike stations across the city. This information is helpful in understanding the demand for Citi Bikes in different areas of the city and can be used to optimize the distribution of stations. 

### Dataset
The dataset used in the paper on Citi Bike Usage Visualization and Analytics in New York City is the Citi Bike trip data, which includes daily trip data over 100 million trip records from 2013 to 2022. The dataset is regularly updated, publicly available, and contains informa- tion about the starting and ending points of the trips, the duration of the trips and the demographic information of the users, among other attributes. The dataset also includes geographic information, which allows for the analysis of the distribution of the Citi Bike stations across different neighborhoods in New York City and the spatial patterns of the usage of the Citi Bike sharing system. We pre-processed and cleaned the original data and generated GeoJSON data for the past 10yrs of data. After pre-processing, we found impactful insights such as total number of borrowed bikes per hour of each station for every month, total number of returned bikes per hour of each station for every month of each year. While the dataset has several limitations, such as only including trips taken on the Citi Bike sharing system and not includ- ing information about the route taken during the trip, it is a valuable resource for analyzing the usage patterns and user behavior of the Citi Bike sharing system in New York City. The large size of the dataset and the richness of the attributes enable the analysis of the temporal and spatial patterns of the usage, the identification of the factors af- fecting the demand and usage, and the assessment of the equity and sustainability of the system.
Link to the raw dataset: https://s3.amazonaws.com/tripdata/index.html

### Steps to run the code:
*** Note : Use Node version v16 ***
1. Download the preprocessed dataset (assets folder) from https://drive.google.com/drive/folders/1zgiJbxtxclAykM18vi6KALvXHPx6jxWb?usp=sharing
2. Paste the downloaded assets folder into /src/
3. cd into the repo and execute the command ***npm install***
4. Run the command ***npm start***
5. Open the link http://localhost:4200/ride-forecasting to view the Ride forecasting module.

### Research Challenges
1. Pre-Processing 50 Gigabytes of data (120 months of data)
2. Integrating data from multiple sources.
3. Developing an effective forecasting model that can accurately predict demand and optimize the use of bikes in the bike-sharing system.
4. Gaining accuracy

### Results
* Ride forecasting : http://localhost:4200/ride-forecasting
<img width="1440" alt="forecasting" src="https://user-images.githubusercontent.com/113558874/236063444-9028db99-e490-4273-8778-6a9bcd4cc767.png">

* Station Analysis and Variation : http://localhost:4200/
<img width="1440" alt="analysis" src="https://user-images.githubusercontent.com/113558874/236063736-a5e86e96-881f-4e2d-a1d7-483260a19c80.png">

* Top 20 busy stations, Demand plot, Gender and Subscription analysis : http://localhost:4200/statistics

<img width="1440" alt="Screen Shot 2023-05-03 at 4 59 32 PM" src="https://user-images.githubusercontent.com/113558874/236064161-c8581cd5-6de1-4dda-8c19-4664478bcde8.png">


