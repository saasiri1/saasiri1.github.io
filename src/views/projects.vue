<style scoped>
    .paragraph{
        @apply text-justify ml-10
    }
    .title{
        @apply text-2xl font-bold text-red-800 my-5
    }
    .subtitle{
        @apply text-xl ml-3 mb-3
    }
    ul{
        @apply list-disc ml-10 font-semibold mt-3
    }
</style>
<template >
<div class="m-10 text-justify">
<h2 class="title">Master Degree research:</h2>

<div class="subtitle">&#8203;Bird Species Detection:&nbsp;</div>


<div class="paragraph" style="text-align:justify;">Computer vision tasks have recently grown and become one of the most challenging tasks in deep learning. 
    One of these tasks is instance segmentation, which is considered a difficult task in computer vision because of the ability to generate different mask 
    colors on each object in the image. Mask-RCNN Proposed using three networks such as Region Proposed network to locate the object and three CNN networks,
     one for classification, one for extract feature, and another for generating the mask. These networks together make Mask R-CNN robust because it makes the 
     image pass to different steps; each step got more in-depth in the image. Mask R-CNN showed an excellent result with the COCO dataset. 
     So, we trained it on a fine-grained classification dataset such as birds&rsquo; species. It is a very challenging dataset because it contains several species,
      that each one of these species has very similar details from another. We trained Mask R-CNN on 100 species from CUB-200-2011 dataset.&nbsp;
    
      <ul>
        <li>Date: 2019</li>
        <li>Advisor:&nbsp;Stephen T. Frezza</li>
        <li>Gannon University</li>
    </ul>
</div>

<h2 class="title">PhD Research: &#8203;</h2>

<h2 class="subtitle">Location Extraction</h2>

<div class="paragraph" style="text-align:justify;">&#8203;&#8203;In 2017 Hurricane Harvey ruined multiple areas in Houston, Texas.
     Many homes were destroyed, or the flood prison people in their homes. Therefore, people started to contact the rescue to save them. However,
      due to the large number of people who needed saving, the call center was busy. Therefore, the people started to use social media to announce 
      their needs for help so the volunteer organization could identify their location to rescue them. So, using Natural language processing to identify 
      the location of people who needs helps artificially using social media post. Our goal was to design a model to analyze the social media tweets 
      and extract the location.&nbsp;&#8203;
      <ul>
        <li>Date: 2020</li>
        <li>Advisor: Dr. Zhe Jiang</li>
        <li>The University of Alabama&nbsp;</li>
    </ul>
</div>

<h2 class="subtitle">Phishing Detection</h2>

<div class="paragraph">Phishing attacks are a type of cybercrime that use social engineering to trick users into revealing
     sensitive information, such as personal identity or financial data. Attackers can design fake web pages to mimic legitimate sites, or send fraudulent
      emails or social media messages that appear to come from a trusted source. The rise of social media has made it easier for attackers to reach a larger
       pool of potential victims. According to the Anti-Phishing Working Group (APWG), there were over 250,000 phishing attacks reported in January 2021, a record high.
        Business compromise attacks also increased by 56% from the last quarter of 2020 to the first quarter of 2021. Financial institutions and social media sites are 
       the most commonly targeted websites. Phishing attacks can have a devastating impact on victims. Attackers can use stolen information to commit identity theft, 
       make unauthorized purchases, or even take control of victims' financial accounts. Phishing attacks can also damage businesses by disrupting operations, stealing 
       customer data, or causing repetitional damage. Our goal is to develop a real-time phishing detection system to protect users from these attacks. Our system will use a
        variety of techniques, including machine learning and natural language processing, to identify and block phishing emails, websites, and social media messages.
        <ul>
            <li>Date: Present</li>
            <li>Advisor: Dr. Yang Xiao</li>
            <li>The University of Alabama</li>
        </ul>
    </div>
</div>
</template>
