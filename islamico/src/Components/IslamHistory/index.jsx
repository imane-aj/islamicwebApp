import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';

export const IslamHistory = () => {
  const dispatch = useDispatch()
  return (
    <Fragment>
      <div>
        <p>
          Islam is a monotheistic religion that was founded by the Prophet Muhammad in the 7th century CE.
          The history of Islam is rich and complex, and spans over a millennium.
        </p><br />
        <p><span className='span text-custom-1 relative ml-4'></span>The Early Years of Islam:</p>
        <p>
          Islam began in the Arabian Peninsula, in the city of Mecca, where the Prophet Muhammad was born in 570 CE.
          Muhammad began receiving revelations from God through the Angel Gabriel when he was 40 years old,
          and these revelations were later compiled into the Islamic holy book, the Quran. Muhammad preached
          the message of Islam to the people of Mecca, but was met with resistance from the powerful tribes of the city.
          He eventually fled to Medina, a city to the north, in what is known as the Hijra, and established the first Islamic
          state. This event is considered the beginning of the Islamic calendar.
        </p><br />
        <p><span className='span text-custom-1 relative ml-4'></span>The Growth and Expansion of Islam:</p>
        <p>
          After the establishment of the Islamic state in Medina, Islam spread rapidly throughout Arabia and
          beyond. Within a century of the death of the Prophet Muhammad in 632 CE, Islamic armies had conquered
          much of the Middle East, North Africa, and Spain. Islamic civilization flourished during this time,
          with the development of great cities like Baghdad and Cairo, and the establishment of universities
          and centers of learning.
        </p>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between my-6'>
        <div className='p-3 md:mr-3 md:mb-0 mb-3 md:w-[%70]'>
          <figure className='border rounded-md border-gray-300 p-2'>
            <img src={'/indexImg/high-angle-holy-book-with-bracelet.jpg'}
                alt="Elephant at sunset" />
            <figcaption className='text-xs text-gray-200'>
              <h2>Quran</h2>
              <p>
                The Quran is the central religious text of Islam, and contains the words of God as revealed to the Prophet
                Muhammad through the Angel Gabriel. It is the primary source of Islamic law and ethics, and is considered
                the final revelation from God to humanity. Some verses from the Quran that are commonly referenced in
                Islamic discourse include:

                <ul className='italic'>
                  <li> "There is no god but Allah, and Muhammad is his messenger" (Quran 48:29)</li>
                  <li> "Allah does not burden a soul beyond that it can bear" (Quran 2:286)</li>
                  <li>"O you who have believed, enter into Islam completely [and perfectly] and do not follow the footsteps of
                    Satan" (Quran 2:208)</li>
                </ul>
              </p>
            </figcaption>
          </figure>
        </div>
        <div className='p-3 md:w-[%80]'>
          <figure className='border rounded-md border-gray-300 md:p-2'>
            <img src={'/indexImg/top-view-beautiful-rpg-still-life-items.webp'}
                alt="Elephant at sunset" />
            <figcaption className='text-xs text-gray-200'>
              <h2>Hadith</h2>
              <p>
                The Hadith, on the other hand, is a collection of sayings, actions, and teachings of the Prophet Muhammad,
                compiled by his companions and later scholars. It serves as a secondary source of Islamic law and ethics, and
                is used to provide context and interpretation to the Quran. Some Hadiths that are commonly referenced in
                Islamic discourse include:<br/><br/>
                <ul className='italic'>
                  <li>"The best of you are those who are best to their families" (Bukhari)</li>
                  <li>"None of you truly believes until he loves for his brother what he loves for himself" (Bukhari)</li>
                  <li>"Whoever believes in Allah and the Last Day, let him speak good or remain silent" (Muslim)</li>
                </ul>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
      Both the Quran and Hadith are considered essential sources of guidance for Muslims, and are studied and referenced extensively in Islamic scholarship and discourse.
    </Fragment>
  )
}
