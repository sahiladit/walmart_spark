
import React from 'react';

export default function FAQ() {
    return (
        <div className='w-screen h-auto bg-white p-5'>
            <div className="text-center text-4xl font-bold text-amber-500">
                <h1 className='mt-5'>SayDate</h1>
                <hr className='mt-1 border-gray-400' />
            </div>

            <h1 className='text-center mt-3 text-2xl font-semibold'>FAQ's</h1>
            <hr className='mt-2 border-gray-400' />

            <div className='w-full h-auto mt-5 space-y-6'>

            <h1 className='text-3xl font-extrabold px-10 underline'>General Questions</h1>

                {/* FAQ 1 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">What is SayDate?</h1>
                    <p className="text-gray-700 mt-2">
                        SayDate is more than just a dating app—it's a social connection platform designed for meaningful relationships,
                        genuine friendships, and real connections. Whether you're looking for a romantic partner, a best friend,
                        or a deep conversation, SayDate helps you connect in a safe, pressure-free, and authentic way.
                    </p>
                </div>

                {/* FAQ 2 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">How is SayDate different from other dating apps?</h1>
                    <p className="text-gray-700 mt-2">
                        Unlike traditional dating apps that focus on swiping and quick matches, SayDate prioritizes:
                    </p>
                    <ul className="text-gray-700 mt-2 list-disc list-inside">
                        <li><span className="font-semibold">Friendship-first approach</span> – Connect with people beyond just dating.</li>
                        <li><span className="font-semibold">Mutual agreement matchmaking</span> – No random or forced matches.</li>
                        <li><span className="font-semibold">Privacy & safety</span> – Control your visibility and interactions.</li>
                        <li><span className="font-semibold">Mood-based visibility</span> – Show up when you're ready, disappear when you're not.</li>
                        <li><span className="font-semibold">Time-locked conversations</span> – Prevent ghosting & foster real engagement.</li>
                        <li><span className="font-semibold">Let Fate Decide mode</span> – A fun way to meet someone special unexpectedly.</li>
                        <li><span className="font-semibold">Safe Space Mode</span> – Ensure a respectful & comfortable experience.</li>
                    </ul>
                </div>

                {/* FAQ 3 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I find people near me on SayDate?</h1>
                    <p className="text-gray-700 mt-2">
                    Yes, you can set your location preferences, but we do not force matches solely based on proximity.
                    </p>
                </div>

                <h1 className='text-3xl font-extrabold px-10 underline'>Getting Started</h1>

                {/* FAQ 4 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">How do I create an account on SayDate?</h1>
                    <p className="text-gray-700 mt-2">
                        You can sign up using your email, phone number, or social media accounts. Once signed up, customize your profile, set your connection preferences, and start engaging with potential matches or friends.
                    </p>
                </div>

                {/* FAQ 5 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Is SayDate free to use?</h1>
                    <p className="text-gray-700 mt-2">
                        Yes! SayDate offers free access to essential features. We also have premium options for enhanced matchmaking, advanced privacy controls, and exclusive features.
                    </p>
                </div>

                {/* FAQ 6 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I use SayDate for making friends and not dating?</h1>
                    <p className="text-gray-700 mt-2">
                        Absolutely! SayDate isn’t just for dating—it’s a friendship-focused platform too. You can set your connection goals to friendship, casual meets, deep conversations, or dating based on what you're looking for.
                    </p>
                </div>

                <h1 className='text-3xl font-extrabold px-10 underline'>User Experience & Customization</h1>

                {/* FAQ 7 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I customize my visibility based on my mood?</h1>
                    <p className="text-gray-700 mt-2">
                    Yes! Our mood-based visibility feature lets you decide when you want to be seen and when you prefer to stay private.
                    </p>
                </div>

                {/* FAQ 8 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Does SayDate allow profile bios longer than other apps?</h1>
                    <p className="text-gray-700 mt-2">
                    Yes! We believe in meaningful connections, so our bios give you more space to express yourself beyond just a few lines.
                    </p>
                </div>

                {/* FAQ 9 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I add multiple profile pictures?</h1>
                    <p className="text-gray-700 mt-2">
                    Yes, you can upload multiple images to showcase different aspects of your personality.
                    </p>
                </div>

                {/* FAQ 10 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I hide my online status or last seen?</h1>
                    <p className="text-gray-700 mt-2">
                    Yes, you can choose whether or not to display your online status for extra privacy.
                    </p>
                </div>

                {/* FAQ 11 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Does SayDate support pronoun customization?</h1>
                    <p className="text-gray-700 mt-2">
                    Yes! You can add your pronouns to your profile to express your identity authentically.
                    </p>
                </div>

                {/* FAQ 12 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I control who can send me connection requests??</h1>
                    <p className="text-gray-700 mt-2">
                    Yes, you can enable filters to allow only specific users—like verified accounts or people matching your connection goals—to send requests.
                    </p>
                </div>


                <h1 className='text-3xl font-extrabold px-10 underline'>Privacy & Safety</h1>

                {/* FAQ 13 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">How does SayDate ensure my safety?</h1>
                    <p className="text-gray-700 mt-2">
                        <ul className="text-gray-700 mt-2 list-disc list-inside">
                            Your safety is our top priority. SayDate offers:
                            <li> Verified profiles to reduce fake accounts.</li>
                            <li> Safe Space Mode for comfortable interactions.</li>
                            <li> User-controlled visibility to stay private when needed.</li>
                            <li>Report & block features to handle unwanted interactions.</li>
                        </ul>
                    </p>
                </div>

                {/* FAQ 14 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I hide my profile from certain people?</h1>
                    <p className="text-gray-700 mt-2">
                        Yes! With privacy-focused interactions, you can control who sees your profile based on your mood, preferences, and settings.
                    </p>
                </div>

                {/* FAQ 15 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">How do I report or block someone?</h1>
                    <p className="text-gray-700 mt-2">
                    Simply go to their profile and click on the Report or Block option. Our team will review any reported profiles to ensure a safe experience for all users.
                    </p>
                </div>

                <h1 className='text-3xl font-extrabold px-10 underline'>Unique Features</h1>

                {/* FAQ 16 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">What is the "Mutual Agreement Matchmaking" feature?</h1>
                    <p className="text-gray-700 mt-2">
                        Unlike typical dating apps where you get matched instantly, SayDate allows both users to mutually agree before a match is made. This ensures meaningful connections rather than random ones.
                    </p>
                </div>

                {/* FAQ 17 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">What is "Time-Locked Conversations"?</h1>
                    <p className="text-gray-700 mt-2">
                        This feature ensures that conversations are temporary to encourage active engagement and reduce ghosting. If a chat isn’t continued within a specific time, it disappears, motivating users to have real conversations.
                    </p>
                </div>

                {/* FAQ 18 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900"> What is "Let Fate Decide" mode?</h1>
                    <p className="text-gray-700 mt-2">
                        If you're feeling adventurous, this mode randomly connects you with one special person based on compatibility. Unlike traditional matching, this is a surprise feature that makes connecting more exciting!
                    </p>
                </div>

                {/* FAQ 19 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900"> How does the "Connection Goals Filter" work?</h1>
                    <p className="text-gray-700 mt-2">
                        Instead of only looking for dating, you can set your connection goals to:
                        <ul className="text-gray-700 mt-2 list-disc list-inside">
                            <li className='font-bold'> Friendship</li>
                            <li className='font-bold'> Casual Meets</li>
                            <li className='font-bold'> Romantic Relationship</li>
                            <li className='font-bold'> Deep Conversations</li>
                        </ul>
                        This allows you to connect with people who have the same intentions.
                    </p>
                </div>

                <h1 className='text-3xl font-extrabold px-10 underline'>Using the App</h1>

                {/* FAQ 20 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I change my connection preferences later?</h1>
                    <p className="text-gray-700 mt-2">
                        Yes! You can update your connection goals, visibility settings, and preferences anytime in the settings.
                    </p>
                </div>

                {/* FAQ 21 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">How does the app prevent ghosting?</h1>
                    <p className="text-gray-700 mt-2">
                        Our Time-Locked Conversations and Safe Space Mode ensure that users engage meaningfully and avoid vanishing without closure.
                    </p>
                </div>

                {/* FAQ 22 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I delete my account?</h1>
                    <p className="text-gray-700 mt-2">
                        Yes, you can delete your account anytime under Settings &gt; Account &gt; Delete Account. Keep in mind that this action is irreversible.
                    </p>
                </div>

                <h1 className='text-3xl font-extrabold px-10 underline'>Future Features & Enhancements</h1>

                {/* FAQ 23 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Will SayDate have events and group activities?</h1>
                    <p className="text-gray-700 mt-2">
                        Yes! We are working on features that allow users to participate in virtual meetups, group activities, and local events to build connections in a fun and interactive way.
                    </p>
                </div>

                {/* FAQ 24 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Will there be a video chat feature?</h1>
                    <p className="text-gray-700 mt-2">
                        We are exploring the possibility of video-based interactions to enhance the connection experience while maintaining safety and comfort.
                    </p>
                </div>

                <h1 className='text-3xl font-extrabold px-10 underline'>Technical Support</h1>

                {/* FAQ 25 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">What should I do if I encounter a bug or issue?</h1>
                    <p className="text-gray-700 mt-2">
                        You can report any bugs through Settings &gt; Help & Support or email us at support@saydate.com.
                    </p>
                </div>

                {/* FAQ 26 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Can I use SayDate on both iOS and Android?</h1>
                    <p className="text-gray-700 mt-2">
                        Yes! SayDate is available on both iOS and Android for a seamless experience across devices.
                    </p>
                </div>

                {/* FAQ 27 */}
                <div className='px-10'>
                    <h1 className="text-xl font-bold text-gray-900">Do you have customer support?</h1>
                    <p className="text-gray-700 mt-2">
                        Yes! Our support team is available 24/7 to assist you. Simply go to Settings &gt; Help & Support to reach out.
                    </p>
                </div>



            </div>
        </div>
    );
}