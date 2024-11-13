import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {/* Left Side (Carousel) */}
                    <div className="w-full md:w-2/3 lg:w-3/4 px-4 mt-6 md:mt-0">
                        <div id="carousel-example-generic" className="relative">
                            <div className="relative overflow-hidden">
                                <div className="carousel-inner relative w-full h-72 md:h-96">
                                    {/* Slide 1 */}
                                    <div className="carousel-item active">
                                        <img
                                            src="http://sibkd.semarangkab.go.id/simpeg/packages/upload/photo/slider/slider_new.png"
                                            alt="Reformasi birokrasi untuk Indonesia yang lebih baik"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center py-2">
                                            Reformasi birokrasi untuk Indonesia yang lebih baik
                                        </div>
                                    </div>
                                    {/* Slide 2 */}
                                    <div className="carousel-item">
                                        <img
                                            src="http://sibkd.semarangkab.go.id/simpeg/packages/upload/photo/slider/PDcYiO.png"
                                            alt="Pondasi revolusi mental PNS"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center py-2">
                                            Pondasi revolusi mental PNS
                                        </div>
                                    </div>
                                    {/* Slide 3 */}
                                    <div className="carousel-item">
                                        <img
                                            src="http://sibkd.semarangkab.go.id/simpeg/packages/upload/photo/slider/CUZeuA.png"
                                            alt="Tanamkan 3 nilai revolusi mental aparatur sipil negara"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center py-2">
                                            Tanamkan 3 nilai revolusi mental aparatur sipil negara
                                        </div>
                                    </div>
                                    {/* Slide 4 */}
                                    <div className="carousel-item">
                                        <img
                                            src="http://sibkd.semarangkab.go.id/simpeg/packages/upload/photo/slider/irgpLH.jpg"
                                            alt="Simulasi CAT online untuk latihan ujian penerimaan calon PNS"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center py-2">
                                            Simulasi CAT online untuk latihan ujian penerimaan calon PNS
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                <button
                                    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                                    aria-label="Previous"
                                    onClick={() => console.log('Previous')}
                                >
                                    &#10094;
                                </button>
                                <button
                                    className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                                    aria-label="Next"
                                    onClick={() => console.log('Next')}
                                >
                                    &#10095;
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Login Form) */}
                    <div className="w-full md:w-1/3 lg:w-1/4 px-4">
                        <div className="text-center">
                            <img
                                src="/lan.png"
                                alt="Logo"
                                className="mx-auto"
                                id="logo"
                            />
                            <h4 className="text-center font-semibold mt-4">IDAMAN</h4>
                            <h4 className="text-center font-semibold">LEMBAGA ADMINISTRASI NEGARA</h4>
                            <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
                                <form
                                    method="POST"
                                    action="http://sibkd.semarangkab.go.id/simpeg/login"
                                    acceptCharset="UTF-8"
                                    id="tampil"
                                >
                                    <input
                                        name="_token"
                                        type="hidden"
                                        value="1zSBnZw75CHDU8usUofojjdtc8aAIV6RPr63C0Km"
                                    />
                                    <div className="mb-4">
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                            Nama Pengguna
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                            placeholder="Nama Pengguna"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Kata Sandi
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                            placeholder="Kata Sandi"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                                    >
                                        Login
                                    </button>
                                    <button
                                        type="reset"
                                        className="w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
                                    >
                                        Reset
                                    </button>
                                </form>
                            </div>
                            <p className="text-center text-sm mt-4 text-gray-600">
                               @ Lembaga Administrasi Negara
                                <br />
                                <b>BIRO SUMBER DAYA MANUSIA LAN</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
