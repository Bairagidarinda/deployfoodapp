import './Section.css'


function Section({ image, s1, s2,s3,s4,s5, imageOnLeft }) {
  return (
    <section className="section">
      <div className={`section-container ${imageOnLeft ? 'image-left' : 'image-right'}`}>
        {/* {imageOnLeft ? (
          <>
            <div className="section-text">
              <span>{s1}</span>
              <span className='boldy'>{s2}</span>
              <span className='boldy' id='hel'>{s3}</span>
              <span className='lighty'>{s4}</span>
              <span className='lighty'>{s5}</span>
            </div>
            <img src={image} alt="Section Image" />
          </>
        ) : (
          <> */}
            <img src={image} alt="Section Image" />
            <div className="section-text">
              <span>{s1}</span>
              <span className='boldy'>{s2}</span>
              <span className='boldy' id='hel'>{s3}</span>
              <span className='lighty'>{s4}</span>
              <span className='lighty'>{s5}</span>
            </div>
          {/* </> */}
        
      </div>
    </section>
  );
}

export default Section;
