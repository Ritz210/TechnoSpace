import React from "react";
import { Grid, Avatar, Card, Typography } from "@material-ui/core";
import Hero from "./Hero";
import CardMedia from '@material-ui/core/CardMedia';
import ChatBot from '../components/chatbot';
import Footer from "./Footer";
import banner from "../img/banner1.png";
const card = {
    borderRadius: "20px",
    height:"500px",
    // backgroundColor: "#f8f0ff",
    
    marginTop: 0,
    marginLeft: 40,
    marginRight: 40,
    
  };
class Team extends React.Component {
    render() {
        return (
            <Grid>
                 <div>
                <main className="teamcover-page" id="team">
                    <section className="wrapped-page">
                    </section>
                </main>
            </div>
                <div className="banner">
                    <a class="mobilesOnly" href="tel:8368288846">
                        <img className="bannerimg" src={banner} alt="logo" style={{ height: '100%', width: '100%', }}></img>
                    </a>
                </div>
                <Grid container justify="center">
                    <Grid item xs={12} lg={12} >
                        <center>
                            <h1>Our Core Team</h1>
                        </center>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <center>
                            
                            
                            <Card className="homecardt" style={card}>
                <CardMedia>
                <Avatar src={require("../assets/svg/meera.jpeg")} style={{ width: "40%", height: "40%" }} />
                </CardMedia>
                <Typography>
                <h1>Meera Prusty</h1>
                                    <div className="separator"></div>
                                    <h6 className="aboutmaincontentt">Clinical Psychologist & Counsellor</h6>
                            <h6 className="aboutmaincontentt">10 years of experience</h6>
                            <h6 className="aboutmaincontentt">in the field of Counselling</h6>
                            <h6 className="aboutmaincontenttexp">Expertise :</h6>
                                    <h6 className="aboutmaincontentt">Career Counselling , Suicidal Prevention</h6>
                            {/* <h6 className="aboutmaincontentt">Suicidal Prevention</h6> */}
                                    <h6 className="aboutmaincontentt">Autism , Adolescent Counselling</h6>
                            {/* <h6 className="aboutmaincontentt">Adolescent Counselling</h6> */}
                                    <h6 className="aboutmaincontentt">Family Counselling , Geriatric Counselling</h6>
                            {/* <h6 className="aboutmaincontentt">Geriatric Counselling</h6> */}
                </Typography>
              </Card>
                        </center>
                    </Grid>
                    {/* <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                <CardMedia>
                <Avatar src={require("../assets/svg/saswati.jpg")} style={{ width: "40%", height: "40%" }} />

                </CardMedia>
                <Typography>
                            <h1>Saswati Kar</h1>
                                    <div className="separator"></div>
                            <h6 className="aboutmaincontentt">NLP practitioner & Counselor</h6>
                            <h6 className="aboutmaincontenttexp">Expertise :</h6>
                            <h6 className="aboutmaincontentt">Student & Parents</h6>
                            <h6 className="aboutmaincontentt">Relationship</h6>
                            <h6 className="aboutmaincontentt">Past Regression</h6>
                            </Typography>
                            </Card>
                        </center>
                    </Grid> */}
                    <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                            <Avatar src={require("../assets/svg/Aradhana.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                            <h1>Dr. Aradhana Panigrahi</h1>
                                    <div className="separator"></div>
                                    <h6 className="aboutmaincontentt">Psychologist</h6>
                                    <h6 className="aboutmaincontenttexp">Expertise :</h6>
                                    <h6 className="aboutmaincontentt">Suicidal Prevention</h6>
                                    <h6 className="aboutmaincontentt">Relationship</h6>
                                    <h6 className="aboutmaincontentt">Trauma</h6>
                                    <h6 className="aboutmaincontentt">Adolescent</h6>
                            </Typography>
                            </Card>
                        </center>
                    </Grid>
                    {/* <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                            <Avatar src={require("../assets/svg/Samiksha.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                            <h1> Samiksha Das</h1>
                                    <div className="separator"></div>
                                    <h6 className="aboutmaincontentt">PGT Psychology</h6>
                                    <h6 className="aboutmaincontentt">3.5 Years Experience</h6>
                                    <h6 className="aboutmaincontenttexp">Expertise :</h6>
                                    <h6 className="aboutmaincontentt">Students & Parents</h6>
                                    <h6 className="aboutmaincontentt">Relationship Counselling</h6>
                            </Typography>
                            </Card>
                        </center>
                    </Grid> */}
                    {/* <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                            <Avatar src={require("../assets/svg/Anusha.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                            <h1>Anusha Priya</h1>
                                    <div className="separator"></div>
                                    <h6 className="aboutmaincontentt">NLP Practitioner & Communication Coach</h6>
                                    <h6 className="aboutmaincontenttexp">Expertise :</h6>
                                    <h6 className="aboutmaincontentt">Students & Parents </h6>
                                    <h6 className="aboutmaincontentt">Relationship Counselling</h6>
                                    <h6 className="aboutmaincontentt">Stress & Depression</h6>
                            </Typography>
                            </Card>
                        </center>
                    </Grid> */}
                    <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                            <Avatar src={require("../assets/svg/Sambit.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                            <h1>Sambit Nanda</h1>
                                    <div className="separator"></div>
                                    <h6 className="aboutmaincontentt">Clinical Psychologist & Counsellor</h6>
                                    <h6 className="aboutmaincontentt">15 years of experience</h6>
                                    <h6 className="aboutmaincontenttexp">Expertise :</h6>
                                    <h6 className="aboutmaincontentt">Career Counselling</h6>
                                    <h6 className="aboutmaincontentt">Suicidal Prevention</h6>
                                    <h6 className="aboutmaincontentt">Family Counselling</h6>
                            </Typography>
                            </Card>
                        </center>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                            <Avatar src={require("../assets/svg/Smita.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                            <h1>Smita Mohanty</h1>
                                    <div className="separator"></div>
                            <h6 className="aboutmaincontentt">5 years of experience</h6>
                            <h6 className="aboutmaincontentt">in the field of Counselling</h6>
                            <h6 className="aboutmaincontenttexp">Expertise :</h6>
                                    <h6 className="aboutmaincontentt">Stress , Anxiety , Depression , Suicidal Behavioural</h6>
                            {/* <h6 className="aboutmaincontentt">Anxiety</h6> */}
                                    {/* <h6 className="aboutmaincontentt">Depression , Suicidal Behavioural</h6> */}
                            {/* <h6 className="aboutmaincontentt">Suicidal Behavioural</h6> */}
                                    <h6 className="aboutmaincontentt">Family Therapy , Career Counselling , Autism , Depression</h6>
                            {/* <h6 className="aboutmaincontentt">Career Counselling</h6> */}
                                    {/* <h6 className="aboutmaincontentt">Autism , Depression</h6> */}
                            {/* <h6 className="aboutmaincontentt">Depression</h6> */}
                                    <h6 className="aboutmaincontentt">Suicidal Behavioural , Family Therapy , Career Counselling , Autism</h6>
                            {/* <h6 className="aboutmaincontentt">Family Therapy</h6> */}
                                    {/* <h6 className="aboutmaincontentt">Career Counselling , Autism</h6> */}
                            {/* <h6 className="aboutmaincontentt">Autism</h6> */}
                            </Typography>
                            </Card>
                        </center>
                    </Grid>
                
                <Grid item lg={4} xs={12}>
                    <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                                <Avatar src={require("../img/T1.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                                <h1>Vinita Mitra </h1>
                                <div className="separator"></div>
                                <h6 className="aboutmaincontentt">Counselor</h6>
                                <h6 className="aboutmaincontenttexp">Expertise :</h6>
                                <h6 className="aboutmaincontentt"> Career</h6>
                                <h6 className="aboutmaincontentt"> parents</h6>
                                <h6 className="aboutmaincontentt">Relationship</h6>
                                {/* <h6 className="aboutmaincontentt">Adolescent</h6> */}
                            </Typography>
                        </Card>
                    </center>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                                <Avatar src={require("../img/T2.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                                <h1>Anurakta mohanty </h1>
                                <div className="separator"></div>
                                <h6 className="aboutmaincontentt">Counselor & Life Coach</h6>
                                <h6 className="aboutmaincontenttexp">Expertise :</h6>
                                <h6 className="aboutmaincontentt">Career</h6>
                                <h6 className="aboutmaincontentt">Relationship</h6>
                                <h6 className="aboutmaincontentt">Marriage</h6>
                                {/* <h6 className="aboutmaincontentt">Adolescent</h6> */}
                            </Typography>
                        </Card>
                    </center>
                </Grid>
                    <Grid item lg={4} xs={12}>
                        <center>
                            <Card className="homecardt" style={card}>
                                <CardMedia>
                                    <Avatar src={require("../img/T3.jpg")} style={{ width: "40%", height: "40%" }} />
                                </CardMedia>
                                <Typography>
                                    <h1>Snigdha dhal</h1>
                                    <div className="separator"></div>
                                    <h6 className="aboutmaincontentt">Counseling Psychologist</h6>
                                    <h6 className="aboutmaincontenttexp">Expertise :</h6>
                                    <h6 className="aboutmaincontentt">Career</h6>
                                    <h6 className="aboutmaincontentt">Relationship</h6>
                                    <h6 className="aboutmaincontentt"> child Psychology</h6>
                                    {/* <h6 className="aboutmaincontentt">Adolescent</h6> */}
                                </Typography>
                            </Card>
                        </center>
                    </Grid>
                </Grid>
                {/* <Grid container justify="center">
                    <Grid item xs={12} lg={12} >
                        <center>
                            <h1>Co-Founders</h1>
                        </center>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                            <Avatar src={require("../assets/svg/zahid.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                            <h1>Zahid Akhtar</h1>
                                    <div className="separator"></div>
                            <h6 className="aboutmaincontentt">A professional in the field of Organizational Development. Working in the field of Hospitality, Marketing and Sales, over 16+ years of experienced in building a culture of enterprise organizational work in order to achieve customer satisfaction to become a benchmark for the achievement of a company.</h6>
                        </Typography>
                        </Card>
                        </center>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                            <Avatar src={require("../assets/svg/saman.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                            <h1>Summon Patra</h1>
                                    <div className="separator"></div>
                            <h6 className="aboutmaincontentt">A professional with 8 years of experience as Freelance trainer in the given fields: Customer Service,Voice & Accent,Sales & Marketing,Holistic Development, Communication Skill,Law of Attraction,(NLP) Neuro Linguistic Programming. Has experience in trainings with corporate like Multani Pharmaceuticals, Amway, RMCL, Tech Cave Solutions, Blue Star, Soft Skills training for Edubridge & TATA.</h6>
                        </Typography>
                        </Card>
                        </center>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={12} lg={12} >
                        <center>
                            <h1>Advisory Committee</h1>
                        </center>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                            <Avatar src={require("../assets/svg/a.jpg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                            <h1>Akash Das Nayak</h1>
                                    <div className="separator"></div>
                            <h6 className="aboutmaincontentt">MO College</h6>
                            <h6 className="aboutmaincontentt">(Chairperson and State Minister)</h6>
                            </Typography>
                            </Card>
                        </center>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <center>
                        <Card className="homecardt" style={card}>
                            <CardMedia>
                            <Avatar src={require("../assets/svg/a1.jpeg")} style={{ width: "40%", height: "40%" }} />
                            </CardMedia>
                            <Typography>
                            <h1>Tanaya Patnaik</h1>
                                    <div className="separator"></div>
                            <h6 className="aboutmaincontentt">Sambad Group</h6>
                            <h6 className="aboutmaincontentt">(Executive Director)</h6>
                            </Typography>
                            </Card>
                        </center>
                    </Grid>
                </Grid> */}
                <ChatBot/>
                <Footer/>
            </Grid >
        );
    }
}
export default Team