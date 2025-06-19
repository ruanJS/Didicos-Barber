export default defineEventHandler(async () => {
  const accessToken = process.env.INSTAGRAM_TOKEN
  const userId = process.env.INSTAGRAM_USER_ID

  const res = await fetch(
    `https://graph.instagram.com/${userId}/media?fields=id,media_url,permalink,caption,media_type,timestamp&access_token=${accessToken}`
  )

  if (!res.ok) {
    return { error: 'Erro ao buscar o feed do Instagram' }
  }

  const data = await res.json()
  return data
})


// <script setup>
// const { data: instagramData, error } = await useFetch('/api/instagram')
// </script>

// <template>
//   <section id="instagram-feed" class="py-12 bg-white">
//     <div class="container mx-auto px-4">
//       <h2 class="text-3xl md:text-5xl font-bold text-center mb-10">
//         Siga a <span class="text-blue-600">@didicosbarber</span>
//       </h2>

//       <div v-if="instagramData?.data" class="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <a
//           v-for="post in instagramData.data.slice(0, 8)"
//           :key="post.id"
//           :href="post.permalink"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             :src="post.media_url"
//             class="w-full h-48 object-cover rounded hover:opacity-80 transition"
//             :alt="post.caption || 'Post do Instagram'"
//           />
//         </a>
//       </div>

//       <p v-if="error" class="text-center text-red-500 mt-4">
//         Não foi possível carregar o feed do Instagram.
//       </p>
//     </div>
//   </section>
// </template>
