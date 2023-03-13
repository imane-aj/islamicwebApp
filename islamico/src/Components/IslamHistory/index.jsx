import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import menuItemsAr from '../../lang/ar.json'
import menuItemsEn from '../../lang/en.json'

export const IslamHistory = ({t, i18n}) => {
  const dispatch = useDispatch()

  const mainMenuData = (i18n.language === 'ar') 
  ? menuItemsAr.islamicHcycle.map(item => ({
    'id' : item.id,
    'title' : item.title,
    'desc' : item.desc
  }))
  : menuItemsEn.islamicHcycle.map(item => ({
    'id' : item.id,
    'title' : item.title,
    'desc' : item.desc
  }));
  return (
    <Fragment>
      <div>
        <p>{t('islamicHintro')}</p><br />
        {mainMenuData.map((item, idx)=>(
          <Fragment>
            <p><span className='span text-custom-1 relative ml-4'></span>{item.title}</p>
            <p>{item.desc}</p><br />
          </Fragment>
        ))}
      </div>
      <div className='flex flex-col md:flex-row md:justify-between my-6'>
        <div className='p-3 md:mr-3 md:mb-0 mb-3 md:w-[%70]'>
          <figure className='border rounded-md border-gray-300 p-2'>
            {/* <img src={'/indexImg/high-angle-holy-book-with-bracelet.jpg'}
                alt="Elephant at sunset" /> */}
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
            {/* <img src={'/indexImg/top-view-beautiful-rpg-still-life-items.webp'}
                alt="Elephant at sunset" /> */}
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
