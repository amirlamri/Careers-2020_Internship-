module.exports = {
    ENV : process.env.NODE_ENV || 'developement',
    PORT : process.env.PORT || 4000,
    URL : process.env.BASE_URL || 'http://localhost:4000',
    MONGODB_URI:
     process.env.MONGODB_URI || 
     'mongodb+srv://amir123:amir123@amircluster-bzasf.gcp.mongodb.net/CareersDB?authSource=admin&replicaSet=AmirCluster-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    JWT_SECRET: process.env.JWT_SECRET || 'secret1'
};