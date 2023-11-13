<script setup>
const { userId } = defineProps(["userId"]);
</script>

<style>
.contact-info {
  font-style: italic;
  font-weight: bold;
}
.card h2 {
  margin-top: 0px !important;
}
.testimonial-text {
  margin-top: 10px;
}
</style>

<template>
  <h1>{{ userId }}'s Recommendations</h1>

  <div class="card">
    <h2>Kate Proxmire</h2>
    <p class="contact-info">
      (269) 760-6905<br />
      kate.proxmire@farmersinsurance.com<br />
      Director of Agency Innovation at Foremost Insurance<br />
      <a href="http://linkedin.com/in/kathyproxmire" target="_blank"
        >linkedin.com/in/kathyproxmire</a
      >
    </p>
    <p class="testimonial-text">
      Brian is one of the hardest working brightest individuals I have been
      privileged to have on my team. He is never faced with a problem he can not
      solve. He is such a fast learner and is constantly sharpening his skills
      with the latest technologies and certifications. He has an eye for design
      and understands the importance of the user experience in everything he
      develops. Anyone who hires him will see him hit the ground running and
      will immediately recognize how skilled he is. On top of that, his
      communication skills are excellent and his customers have always given him
      high satisfaction survey results. He is a gem and any team would be lucky
      to have him.
    </p>
  </div>

  <div class="card">
    <h2>Chad Gibbs</h2>
    <p class="contact-info">
      (616) 723-1632<br />
      chadgibbs1970@gmail.com<br />
      Internal Communications Lead<br />
      <a href="http://linkedin.com/in/chad-gibbs-70b962191" target="_blank"
        >linkedin.com/in/chad-gibbs-70b962191</a
      >
    </p>
    <p class="testimonial-text">
      I have known and worked with Brian VanPortfleet for over 25 years. We
      worked in the Advertising department for Meijer for a few years, and then
      we both moved to Farmers Insurance, where we worked in the Foremost
      Marketing department for 22 years. For about 10 of those years I was a
      manager, with Brian being one of my team members. I have been consistently
      impressed by both Brian's attitude toward his work and his performance on
      the job. Brian is a dream employee and co-worker. His mind is a sponge and
      he is extremely adept at learning new technologies quickly. Brian has been
      instrumental in creating best practices for our team for every aspect of
      the development process.
    </p>
  </div>

  <div class="testimonial card">
    <h2>Shannon Pocock</h2>
    <p class="contact-info">
      (616) 581-7615<br />
      Creative Services Coordinator at Ranir LLC<br />
      <a href="http://linkedin.com/in/shannon-pocock-b57bba55" target="_blank"
        >linkedin.com/in/shannon-pocock-b57bba55</a
      >
    </p>
    <p class="testimonial-text">
      I have had the pleasure of working with Brian VanPortfleet for many years
      at both Meijer and Farmers Insurance. Most recently I worked closely in a
      collaborative manner with Brian as a Front-End Web Developer and me as a
      Sr. Graphic Designer at Farmers Insurance. I found Brian’s in-depth
      understanding of web technology and content management extremely helpful
      when creating designs he would be utilizing. He is very knowledgeable with
      web, portals, and content management and is never afraid to share that
      knowledge with other colleagues. Anyone looking for a front-end web
      developer with timely responses and value-added should look no further.
      Brian VanPortfleet is great at curating, creating, and managing content,
      and highlighting content from angles others may not have thought about.
      Brian would be an asset to your web team.
    </p>
  </div>

  <div class="card">
    <h2>Callista Gloss</h2>
    <p class="contact-info">
      (616) 205-2626<br />
      Web Application Manual and Automated Tester (SDET) and Scaled Agile
      Framework Scrum<br />
      <a href="http://linkedin.com/in/callistagloss" target="_blank"
        >linkedin.com/in/callistagloss</a
      >
    </p>
    <p class="testimonial-text">
      I had the pleasure of working with Brian on the Foremost Customer
      Self-Service Portal at Farmers Insurance. With years of knowledge as a
      front-end web developer, Brian brought his web expertise and eye for
      design to the project from day one. In addition to being highly skilled at
      his craft, Brian is also a joy to be around and would greatly benefit any
      company. I highly recommend him.
    </p>
  </div>
</template>
