import React from 'react';

function About() {
  return (
    <section>
      <h3>About Me</h3>
      <article>
        <div className='circle'>
          <img src={process.env.PUBLIC_URL + '/assets/profile.png'} alt='me' />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh
          eros. Praesent nec sem luctus erat interdum pellentesque. Nulla
          dapibus mauris quis est cursus luctus. Aenean metus quam, cursus ac
          consectetur sit amet, faucibus eget ipsum. Sed eu fermentum mi, vitae
          ornare libero. Mauris velit elit, interdum et accumsan sit amet,
          tristique in purus. Aliquam lobortis ex molestie est aliquam
          venenatis. Ut mauris ex, sagittis at rutrum eu, semper id nibh. Cras
          erat odio, scelerisque egestas elit eu, aliquam vehicula erat. Morbi
          dignissim rutrum orci, sit amet dignissim dolor. Integer in porta
          libero. In arcu dui, convallis et ex a, eleifend malesuada justo.
          Fusce laoreet justo at nunc condimentum rutrum. Nullam eros orci,
          pretium sit amet pulvinar id, placerat id ipsum.
        </p>
        <p>
          Nunc nec tincidunt eros. Suspendisse potenti. Quisque risus magna,
          venenatis nec nibh ut, tempus volutpat dui. Nunc venenatis sapien
          luctus ornare dictum. Quisque et lacinia est, sed sodales ligula.
          Nulla elementum pellentesque hendrerit. Praesent convallis, lacus sed
          facilisis tristique, orci dui finibus mi, non facilisis odio lacus vel
          nulla. Sed pulvinar tristique rutrum. Fusce ac luctus mi. Vestibulum
          rutrum, orci suscipit aliquam varius, tellus orci varius elit,
          pharetra faucibus dui turpis vel ex. Curabitur sit amet nulla arcu.
          Duis ut est eu ex pretium accumsan. Suspendisse ut felis vel elit
          iaculis congue eget ac purus. Donec congue nisi quis libero mollis
          tincidunt. Suspendisse a massa quis ex imperdiet euismod. Sed vitae
          quam egestas, facilisis eros vitae, facilisis lectus.
        </p>
      </article>
    </section>
  );
}

export default About;
