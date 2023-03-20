import React from 'react'
import { Select } from './Select'

export const Hadith = () => {
    return (
        <div className='container md:w-3/5 m-auto mt-14'>
            <Select />
        <div className="AllHadith single_hadith border rounded-md border-gray-100 py-10">
            <div className="chapter flex flex-col md:flex-row md:justify-between p-3 mb-3">
                <div className="englishchapter text-lg">(6) Chapter: To feed (others) is a part of Islam</div>
                <div className="arabicchapter text-end text-xl">باب إِطْعَامُ الطَّعَامِ مِنَ الإِسْلاَمِ (6)</div>
            </div>
            <div className="actualHadithContainer hadith_container_bukhari px-3" id="h100120">
                {/* <!-- Begin hadith --> */}
                <div className="hadithTextContainers flex flex-col md:flex-row md:justify-between" id="htc100120">
                    <div className="englishcontainer md:w-5/12 md:mb-0 mb-10" id="t100120">
                        <div className="hadith_narrated">
                            <p>

                                Narrated 'Abdullah bin 'Amr:</p>
                        </div>
                        <div className="text_details">
                            <p>

                                A man asked the Prophet (ﷺ) , "What sort of deeds or (what qualities of)
                                Islam are good?" The Prophet (ﷺ) replied, 'To feed (the poor) and greet
                                those whom you know and those whom you do not Know (See
                                Hadith No. 27).
                            </p>
                        </div>
                    </div>
                    <div className="arabic_hadith_full arabic text-right md:w-5/12 ">
                        <span className="arabic_sanad arabic text-2xl">حَدَّثَنَا عَمْرُو بْنُ خَالِدٍ، قَالَ حَدَّثَنَا اللَّيْثُ، عَنْ يَزِيدَ، عَنْ أَبِي الْخَيْرِ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو ـ رضى الله عنهما ـ أَنَّ رَجُلاً، سَأَلَ النَّبِيَّ صلى الله عليه وسلم أَىُّ الإِسْلاَمِ خَيْرٌ قَالَ &rlm;
                        </span>
                        <span className="arabic_text_details arabic text-2xl">"&rlm; تُطْعِمُ الطَّعَامَ، وَتَقْرَأُ السَّلاَمَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ &rlm;"</span>
                        <span className="arabic_sanad arabic">&rlm;&rlm;.&rlm;</span>
                    </div>
                </div>
                {/* <!-- End hadith --> */}

                <div className="bottomItems flex flex-col md:flex-row md:justify-between mt-9">
                    
                    <table className="hadith_reference" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td><b>Reference</b>
                                </td><td>&nbsp;:&nbsp;Sahih al-Bukhari 12</td>
                            </tr>
                            <tr>
                                <td>In-book reference</td>
                                <td>&nbsp;:&nbsp;Book 2, Hadith 5</td>
                            </tr>
                            <tr>
                                <td><span className="deprecated_reference text-gray-500">USC-MSA web (English) reference</span></td>
                                <td>&nbsp;: <span className="deprecated_reference text-gray-500">Vol. 1, Book 2, Hadith 12</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="hadith_permalink mt-10 md:mt-0">
                        <span className="reportlink md:pl-3 text-custom-1" href="javascript: void(0);"> Report Error </span> | 
                        <span className="sharelink md:pl-3 text-custom-1">Share</span> | 
                        <span className="copylink md:pl-3 text-custom-1" title="Copy hadith to clipboard"> Copy </span>
                        <span className="copycbcaret text-custom-1" title="Change copy options"> ▼ </span>
                    </div>
                </div>
            </div>
            {/* <!-- end actual hadith container --> */}
        </div>
        </div>
    )
}
