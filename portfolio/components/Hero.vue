<template>
  <div class="flex flex-col lg:flex-row lg:mt-8">
    <div class="flex flex-col justify-center lg:w-1/2 lg:pr-3">
      <p class="text-gray-300">yung software engineer &trade;</p>
      <h1
        class="text-4xl sm:text-5xl text-gray-100 uppercase font-black mt-2 sm:mt-3"
      >
        Lewis Lloyd
      </h1>
      <p class="text-xl text-gray-200 mt-3 sm:mt-5">
        Specialising in full-stack web applications and cloud architecture, with
        a dash of product management and technical strategy.
      </p>
      <div
        class="flex flex-col sm:flex-row space-y-3 sm:space-x-3 sm:space-y-0 mt-5"
      >
        <a href="https://github.com/LloydTao" class="flex">
          <button
            type="button"
            class="flex-1 shadow-md py-3 px-6 bg-github-primary hover:bg-black rounded"
          >
            <div class="flex items-center text-white space-x-5">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 fill-current"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              <span class="text-2xl font-semibold">GitHub</span>
            </div>
          </button></a
        >
        <a href="https://twitter.com/LloydTao" class="flex">
          <button
            type="button"
            class="flex-1 shadow-md py-3 px-6 bg-twitter-primary hover:bg-blue-500 rounded"
          >
            <div class="flex items-center text-white space-x-3">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 fill-current"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
              <span class="text-2xl font-semibold">Twitter</span>
            </div>
          </button></a
        >
      </div>
    </div>
    <div class="flex rounded shadow lg:w-1/2 overflow-hidden mt-5 lg:mt-0">
      <div>
        <img
          src="~/assets/img/seats.jpg?webp"
          width="620"
          height="411"
          alt="L-sit static hold in Harrison Study Room"
        />
        <p class="text-xl text-gray-700 italic bg-gray-100 border-t px-8 py-5">
          &quot;there’s two types of people, either you can punch in your dreams
          or you can’t&quot;
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
