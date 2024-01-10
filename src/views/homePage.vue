<script setup>

import mainNav from '../components/mainNav.vue';
import Mainfooter from '../components/mainFooter.vue';
import Social_icons from '../components/social_icons.vue';
import {ChevronDoubleUpIcon} from "@heroicons/vue/24/outline";

import projects from './projects.vue';
import publication from './publication.vue';
import resume from './resume.vue';
import News from './news.vue';

</script>
<template class="relative">
  <nav>
    <mainNav />
  </nav>
    <div class="grid grid-row md:grid-cols-3">
        <div class="w-full flex flex-col items-center">
            <div id='image' class="">
              <img src="../imgs/sultan-asiri-4.png" alt="Sultan Asiri image" class="w-36 md:h-96 md:w-72 rounded-full">
            </div>
            <h1 class="text-3xl font-bold font-serif mt-3 ">Sultan Asiri</h1>
            <div class="w-80 mt-4 text-justify ">
              I am a Ph.D. student in the computer science department at the University of Alabama. My research interests are Phishing detection,
                 advertisement attacks, and applying Natural Language Processing. I am a member of <a href="http://yangxiao.cs.ua.edu" class="text-red-800 font-semibold">Dr. Xiao's&nbsp; 
                 </a>lab (<a href="http://yangxiao.cs.ua.edu/W4-NET.html" class="text-red-800 font-semibold">W4Net</a>). 
            </div>
            <div id="researchInterest">
              <h2 class="text-2xl font-bold mt-5 ">Research Interest:</h2>
              <ul class="list-disc md:ml-10">
                <li>Phishing detection</li>
                <li>Advertisement attacks</li>
                <li>Natural Language Processing</li>
                <li>Machine Learning & Deep Learning</li>
              </ul>


            </div>
            <div class="flex flex-row m-3">
              <Social_icons />
            </div>


        </div>
        <div class="w-96 md:w-full md:col-span-2 break-words">
          <News id="news" class=" md:border-l  md:px-5"/>
          <resume id='resume' class=" md:border-l  md:px-5"/>
          
          <publication id="publication" class=" md:border-l  md:px-5"/>
          <projects id='projects' class=" md:border-l  md:px-5"/>
          
          

        </div>
    </div>
    <!-- <div v-if="showScrollButton" class="fixed bottom-3 right-4 w-10 h-10 rounded-full border border-xl hover:bg-gray-100">
    <a @click="scrollToTop"><ChevronDoubleUpIcon/></a>
  </div> -->

    <Mainfooter />
</template>
