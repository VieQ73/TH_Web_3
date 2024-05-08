import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
// import Content from './Content'
const Content = lazy(() => import('./Content'))

const Contents = () => {
    return (
        <div className='w-[93.7%] flex flex-col ml-20 bg-black'>
            <Suspense fallback={Loading}>
                <div className='flex'>
                    <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="8:05" time="2 months" views="380K" authorImg="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" author="B21DCCN636" heading="HELLO, THUC HANH WEB BUOI 3" /></Link>

                    <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="16:06" time="11 months" views="264K" authorImg="https://img.icons8.com/stickers/100/stich.png" author="Le Dinh QUy" heading="Thực hành web buổi 1"  /></Link>
                    
                    <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="1:14:09" time="14 hours" views="18K" authorImg="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" author="Web Dev Easy" heading="Thực hành buổi 2"  /></Link>
                    
                    <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="6:47" time="6 years" views="336M" authorImg="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" author="T-Series" heading="Chung ta cua sau nay | Full Video"  /></Link>
                </div>
                <div className='flex'>
                    <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="1:04" time="3 years" views="7.9M" authorImg="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" author="ICC" heading="The Perfect Ball! | Kuldeep On THAT Ball To Babar | ICC Cricket World Cup 2019"  /></Link>
                    
                    <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="5:30" time="3 months" views="3.8M" authorImg="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" author="Quy Le Dinh" heading="Ngay qua giong bao"  /></Link>

                    <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="4:46:25" time="5 days" views="68K" authorImg="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" author="Web3school" heading="Learn TypeScript - Full Tutorial"  /></Link>

                    <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="36:15" time="4 days" views="45K" authorImg="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" author="Quy Dinh Le" heading="Project 1: PDF Merger WebApp Using JavaScript & Bootstrap"  /></Link>

                </div>
                <div className='flex'>
                <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="1:04" time="1 month" views="34M" authorImg="https://img.icons8.com/stickers/100/stich.png" author="Marvel Entertainment" heading="Marvel Studios’ Black Panther: Wakanda Forever | Official Trailer"  /></Link>

                <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="1:53" time="1 month" views="3.4M" authorImg="https://img.icons8.com/stickers/100/stich.png" author="FIFA" heading="FIFA World Cup 2022"  /></Link>

                <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="10:46" time="8 days" views="218K" authorImg="https://img.icons8.com/stickers/100/stich.png" author="Shark Tank Viet Nam" heading="A Robot from the future"  /></Link>

                <Link to="/video"><Content image="https://pixabay.com/get/g0342de0c547590c1fddca3159047e5ccbd2b0d2868331053213b9989d5486feb0aae12dfd383fa83ade8e16c5f3cf1a562b20b27fbf6768d075b9978ab3ca92b_1280.jpg" dur="22:30" time="3 days" views="286K" authorImg="https://img.icons8.com/stickers/100/stich.png" author="Gao Viet Nam" heading="Best Game in 2024"  /></Link>
                </div>
                
            </Suspense>
        </div>
    )
}

export default Contents