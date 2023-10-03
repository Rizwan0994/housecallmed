import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComingSoonPage from "../components/Pages/ComingSoon/ComingSoon";
import Crad from "../components/UI/Cards/ImageCard"
import Navbar from "../components/UI/NavBar/Navbar";
import MyButton from "../components/UI/Buttons/Button";
import ScheduleForm from "../components/UI/Forms/ScheduleForm";
import CenteredCard from "../components/UI/Cards/IconTextCard";
import { LocalHospital as GeriatricCareIcon, Title } from '@mui/icons-material';
import Footer from "../components/UI/Footer/Footer";
import ImageCard from "../components/UI/Cards/ImageCard";
import TestimonialCard from "../components/UI/Cards/TestimonialCard";
import PageTitleCard from "../components/UI/Cards/PageTitleCard";
const AppRouter = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvciUyMHBhdGllbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60';
    return (
        <BrowserRouter>
        {/* <Navbar /> */}
         {/* <MyButton text="Make an appointment" color="primary" variant="contained" /> */}
            {/* <ScheduleForm /> */}
            {/* <CenteredCard icon={<GeriatricCareIcon />} title="Geriatric Care"></CenteredCard> */}
        <Routes> 
            {/* <Route path="/" element={<ComingSoonPage />} />
            <Route path="/card" element={<Crad />} /> */}
        </Routes>
        <div>
      {/* <ImageCard imageUrl={imageUrl}  /> */}
      {/* <PageTitleCard
        title="ABOUT US"
        description="We have more than 10 years experience."
        caption="What sets HouseCall MD apart is our commitment to innovation, compassion, and personalized care. We are at the
        forefront of modern healthcare, leveraging technology and best practices to enhance the quality and convenience of our
        services. By bringing primary care directly to your home, we eliminate the hassle of clinic visits, long waits, and
        transportation challenges, allowing you to focus on your health in a com"
        imageUrl={imageUrl }
      /> */}
      <TestimonialCard/>
          </div>
        {/* <Footer/> */}
        </BrowserRouter>
    );
};
export default AppRouter;