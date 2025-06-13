'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { OrganizationSchema, WebsiteSchema } from './components/JsonLdSchema';

// بيانات المقالات من site_articles.txt (أول 12 مقالة فقط)
const siteArticles = [
  { title: 'اعتبارات تصميم زي شركات الطيران', path: '/blog/flight-crew/flight-1', image: '/images/flight_crew/crew_uniform_visual_identity.webp' },
  { title: 'أقمشة أزياء طاقم الطائرة', path: '/blog/flight-crew/flight-2', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'موضة مضيفات الطيران العصرية', path: '/blog/flight-crew/flight-3', image: '/images/flight_crew/cabin_crew_uniforms.webp' },
  { title: 'أزياء الطيارين والمضيفات', path: '/blog/flight-crew/flight-4', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'التصميم الثقافي في أزياء الطيران العربية', path: '/blog/flight-crew/flight-8', image: '/images/flight_crew/cultural_aviation_uniforms.webp' },
  { title: 'وشاحات طاقم الطائرة وأهميتها', path: '/blog/flight-crew/flight-6', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'متطلبات السلامة في أزياء الطيران', path: '/blog/flight-crew/flight-7', image: '/images/flight_crew/comfort_safety_airline_uniforms.webp' },
  { title: 'أفضل أزياء طاقم الطائرة', path: '/blog/flight-crew/flight-5', image: '/images/flight_crew/best_flight_crew_attire.webp' },
  { title: 'مصنعو أزياء طاقم الطيران', path: '/blog/flight-crew/flight-9', image: '/images/flight_crew/crew_uniform_solutions.webp' },
  { title: 'أزياء الطيران في السعودية', path: '/blog/flight-crew/flight-10', image: '/images/flight_crew/arab_airlines_uniforms.webp' },
  { title: 'أهمية التصميم الموحد لزي طاقم الطائرة', path: '/blog/flight-crew/flight-13', image: '/images/flight_crew/air_crew_attire.webp' },
  { title: 'أحذية وحقائب طاقم الطائرة', path: '/blog/flight-crew/flight-12', image: '/images/flight_crew/air_crew_attire.webp' }
];

const slides = [
  {
    image: '/images/flight_crew/cabin_crew_uniforms.webp', title: 'أزياء طيران احترافية',
    description: 'تصاميم عصرية تجمع بين الأناقة والراحة'
  },
  {
    image: '/images/clinic_wear/header_medical_uniform.webp', title: 'أزياء طبية متخصصة',
    description: 'تصاميم مريحة تلبي احتياجات القطاع الطبي'
  },
  {
    image: '/images/culinary_apparel/header_chef_uniform.webp', title: 'أزياء الضيافة والمطاعم',
    description: 'أزياء عملية تجمع بين الأناقة والاحترافية'
  }
];

const features = [
  {
    icon: '🎨',
    title: 'تصميم احترافي',
    description: 'فريق متخصص من المصممين لتطوير أزياء تناسب هويتك المؤسسية'
  },
  {
    icon: '✨',
    title: 'جودة عالية',
    description: 'أقمشة ومواد ممتازة مع اهتمام بأدق التفاصيل'
  },
  {
    icon: '⚡',
    title: 'خدمة سريعة',
    description: 'التزام بمواعيد التسليم مع مرونة في تلبية الطلبات العاجلة'
  },
  {
    icon: '🌟',
    title: 'تخصيص كامل',
    description: 'خيارات متعددة للتطريز والطباعة وإضافة الشعارات'
  },
  {
    icon: '💯',
    title: 'ضمان الجودة',
    description: 'ضمان شامل على جميع منتجاتنا مع دعم فني مستمر'
  },
  {
    icon: '🌐',
    title: 'تغطية واسعة',
    description: 'خدمات شاملة لجميع مناطق المملكة والخليج'
  }
];

const stats = [
  { number: '1000+', label: 'عميل راضٍ' },
  { number: '50000+', label: 'زي موحد' },
  { number: '15+', label: 'سنة خبرة' },
  { number: '100%', label: 'رضا العملاء' }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Schema */}
      <OrganizationSchema />
      <WebsiteSchema />
      
      {/* Hero Slider */}
      <section className="relative h-[80vh]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false 
          }}
          effect="fade"
          loop={true}
          className="h-full"
          speed={1000}
          watchSlidesProgress={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
                <div className="absolute inset-0">
                  <div className="flex h-full items-center justify-center">
                    <div className="max-w-4xl mx-auto text-center px-4">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                        <Link 
                          href="/quote"
                          className="w-full sm:w-auto bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                          اطلب عرض سعر
                        </Link>
                        <Link 
                          href="/blog"
                          className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          تصفح المدونة
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">مميزاتنا</h2>
            <p className="text-xl text-gray-600">نقدم لكم أفضل الحلول في مجال الأزياء الموحدة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section - First 12 Articles Only */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">مقالات مختارة</h2>
          <p className="text-xl text-center text-gray-600 mb-12">اكتشف أحدث المقالات في عالم الأزياء الموحدة</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteArticles.map((article, idx) => (
              <Link key={idx} href={article.path} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full bg-gray-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                    <span className="text-blue-700 font-medium mt-auto">قراءة المزيد</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Link to Blog Page */}
          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 font-semibold"
            >
              عرض جميع المقالات
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">فئات الأزياء الموحدة</h2>
          <p className="text-xl text-center text-gray-600 mb-12">استكشف مجموعة واسعة من الأزياء الموحدة لمختلف القطاعات</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/flight_crew/cabin_crew_uniforms.jpeg"
                  alt="أزياء الطيران"
                  fill
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">أزياء الطيران</h3>
                <p className="text-gray-600 mb-4">مجموعة متكاملة من الأزياء الرسمية لطاقم الطيران</p>
                <Link href="/blog?category=flight_crew" className="text-blue-600 hover:text-blue-800">
                  عرض التفاصيل <span>&#8594;</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/clinic_wear/medical_wear.jpeg"
                  alt="الأزياء الطبية"
                  fill
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">الأزياء الطبية</h3>
                <p className="text-gray-600 mb-4">أزياء متخصصة للقطاع الطبي بمختلف تخصصاته</p>
                <Link href="/blog?category=clinic_wear" className="text-blue-600 hover:text-blue-800">
                  عرض التفاصيل <span>&#8594;</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/culinary_apparel/kitchen_staff_clothing.jpeg"
                  alt="أزياء الطهاة"
                  fill
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">أزياء الطهاة</h3>
                <p className="text-gray-600 mb-4">أزياء احترافية للعمل في المطاعم والفنادق</p>
                <Link href="/blog?category=culinary_apparel" className="text-blue-600 hover:text-blue-800">
                  عرض التفاصيل <span>&#8594;</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/products" className="text-blue-600 font-semibold text-lg hover:text-blue-800">
              عرض جميع التصنيفات <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">الأسئلة الشائعة</h2>
          <p className="text-xl text-center text-gray-600 mb-12">إجابات على الأسئلة الأكثر شيوعًا</p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">كيف يمكنني طلب عرض سعر للأزياء الموحدة؟</h3>
              <p className="text-gray-600">يمكنك طلب عرض سعر مباشرة من خلال الموقع عبر صفحة "طلب عرض سعر" أو التواصل معنا على الأرقام الموضحة أسفل الصفحة.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">ما هي مدة التنفيذ المتوقعة للطلبات الكبيرة؟</h3>
              <p className="text-gray-600">تعتمد مدة التنفيذ على حجم الطلب والتصميم المطلوب، لكن بشكل عام نلتزم بإنجاز الطلبات الكبيرة خلال 2-4 أسابيع من تاريخ الموافقة على العينة.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">هل توفرون خدمة التوصيل لجميع مناطق المملكة؟</h3>
              <p className="text-gray-600">نعم، نوفر خدمة التوصيل لجميع مناطق المملكة العربية السعودية ودول الخليج مع إمكانية الشحن الدولي للطلبات الكبيرة.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">هل يمكن تصميم زي موحد خاص بشركتنا؟</h3>
              <p className="text-gray-600">بالطبع، نوفر خدمة التصميم المخصص بالكامل بما يتناسب مع هوية شركتك وطبيعة عملها، مع إمكانية إضافة الشعارات والألوان المميزة للشركة.</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/faq" className="text-blue-600 font-semibold text-lg hover:text-blue-800">
              المزيد من الأسئلة الشائعة <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز لتطوير مظهر فريق عملك؟</h2>
          <p className="text-xl text-blue-100 mb-8">احصل على عرض سعر مخصص يناسب احتياجات مؤسستك</p>
          <Link 
            href="/quote"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            اطلب عرض سعر الآن
          </Link>
        </div>
      </section>
    </div>
  );
} 