 // Sample posts data
        const postsData = [
            {
                id: 1,
                title: "Tecnologias Sustentáveis no Tratamento de Água",
                content: "Exploramos as mais recentes inovações em tecnologias sustentáveis para o tratamento de água, com foco em eficiência energética e redução de impactos ambientais. Novos métodos de filtragem e purificação estão revolucionando a forma como lidamos com os recursos hídricos.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
                author: "Maria Silva",
                authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                date: "15 Jun, 2023",
                tags: ["tecnologia", "sustentabilidade", "água"],
                category: "tecnologia",
                likes: 24,
                comments: 8,
                liked: false,
                saved: false
            },
            {
                id: 2,
                title: "Gestão Inteligente de Resíduos Sólidos Urbanos",
                content: "Como as cidades podem implementar sistemas inteligentes de gestão de resíduos para reduzir custos, aumentar a reciclagem e melhorar a qualidade de vida urbana. A tecnologia IoT está transformando a coleta e processamento de lixo.",
                image: "https://images.unsplash.com/photo-1618477388957-7a23e5d5ccf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                author: "João Santos",
                authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                date: "10 Jun, 2023",
                tags: ["sustentabilidade", "resíduos", "tecnologia"],
                category: "sustentabilidade",
                likes: 18,
                comments: 5,
                liked: true,
                saved: true
            },
            {
                id: 3,
                title: "Impactos das Mudanças Climáticas nos Recursos Hídricos",
                content: "Análise dos efeitos das mudanças climáticas na disponibilidade e qualidade dos recursos hídricos e estratégias de adaptação para garantir a segurança hídrica. Estudos mostram alterações significativas nos padrões de precipitação.",
                image: "https://images.unsplash.com/photo-1569163139394-de44cb2c8cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                author: "Ana Costa",
                authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                date: "5 Jun, 2023",
                tags: ["mudanças climáticas", "recursos hídricos", "sustentabilidade"],
                category: "recursos-hidricos",
                likes: 32,
                comments: 12,
                liked: false,
                saved: false
            },
            {
                id: 4,
                title: "Novas Técnicas em Sistemas de Drenagem Urbana",
                content: "Exploramos abordagens inovadoras para sistemas de drenagem urbana que ajudam a prevenir enchentes e melhoram a gestão das águas pluviais. Soluções baseadas na natureza estão ganhando espaço.",
                image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                author: "Carlos Mendes",
                authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                date: "1 Jun, 2023",
                tags: ["drenagem", "hidráulica", "urbano"],
                category: "hidraulica",
                likes: 15,
                comments: 3,
                liked: false,
                saved: true
            }
        ];

        // DOM Elements
        const userInfo = document.getElementById('userInfo');
        const userDropdown = document.getElementById('userDropdown');
        const createPostBtn = document.getElementById('createPostBtn');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const postsGrid = document.getElementById('postsGrid');
        const postModal = document.getElementById('postModal');
        const createPostModal = document.getElementById('createPostModal');
        const profileModal = document.getElementById('profileModal');
        const closeModalBtns = document.querySelectorAll('.close-modal');
        const newPostForm = document.getElementById('newPostForm');
        const profileForm = document.getElementById('profileForm');
        const tagInput = document.getElementById('tagInput');
        const tagsInput = document.getElementById('tagsInput');
        const publishPostBtn = document.getElementById('publishPostBtn');
        const postContent = document.getElementById('postContent');
        const avatarUpload = document.getElementById('avatarUpload');
        const profileAvatarPreview = document.getElementById('profileAvatarPreview');

        // Current state
        let currentPosts = [...postsData];
        let currentFilter = 'all';
        let currentSearch = '';
        let tags = [];
        let currentPostId = null;

        // Initialize the page
        function init() {
            renderPosts(currentPosts);
            setupEventListeners();
        }

        // Set up event listeners
        function setupEventListeners() {
            // User dropdown
            userInfo.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdown.classList.toggle('show');
            });

            document.addEventListener('click', () => {
                userDropdown.classList.remove('show');
            });

            // Profile button
            document.getElementById('profileBtn').addEventListener('click', (e) => {
                e.preventDefault();
                userDropdown.classList.remove('show');
                showModal(profileModal);
            });

            // Logout button
            document.getElementById('logoutBtn').addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('Tem certeza que deseja sair?')) {
                    // In a real app, you would clear the session and redirect
                    alert('Logout realizado com sucesso!');
                    // window.location.href = 'index.html'; // Redirect to login page
                }
            });

            // Create post button
            createPostBtn.addEventListener('click', () => {
                showModal(createPostModal);
            });

            // Search functionality
            searchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });

            // Filter buttons
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFilter = btn.dataset.filter;
                    filterPosts();
                });
            });

            // Close modals
            closeModalBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    hideModal(postModal);
                    hideModal(createPostModal);
                    hideModal(profileModal);
                });
            });

            // Create post form
            newPostForm.addEventListener('submit', (e) => {
                e.preventDefault();
                createNewPost();
            });

            // Cancel post button
            document.getElementById('cancelPostBtn').addEventListener('click', () => {
                hideModal(createPostModal);
                newPostForm.reset();
                tags = [];
                renderTags();
            });

            // Profile form
            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                updateProfile();
            });

            // Cancel profile button
            document.getElementById('cancelProfileBtn').addEventListener('click', () => {
                hideModal(profileModal);
            });

            // Tag input
            tagInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    addTag(tagInput.value);
                    tagInput.value = '';
                }
            });

            // Avatar upload
            avatarUpload.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        profileAvatarPreview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });

            // Quick publish post
            publishPostBtn.addEventListener('click', () => {
                const content = postContent.value.trim();
                if (content) {
                    // In a real app, you would send this to the backend
                    alert('Post publicado com sucesso!');
                    postContent.value = '';
                } else {
                    alert('Por favor, escreva algo antes de publicar.');
                }
            });

            // Close modals when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === postModal) hideModal(postModal);
                if (e.target === createPostModal) hideModal(createPostModal);
                if (e.target === profileModal) hideModal(profileModal);
            });
        }

        // Render posts to the grid
        function renderPosts(posts) {
            postsGrid.innerHTML = '';
            
            if (posts.length === 0) {
                postsGrid.innerHTML = '<p class="no-posts">Nenhum post encontrado.</p>';
                return;
            }
            
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post-card';
                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <div class="post-card-content">
                        <div class="post-card-header">
                            <img src="${post.authorAvatar}" alt="${post.author}" class="post-author-avatar">
                            <div class="post-author-info">
                                <h4>${post.author}</h4>
                                <p class="post-date">${post.date}</p>
                            </div>
                        </div>
                        <h3>${post.title}</h3>
                        <div class="post-tags">
                            ${post.tags.map(tag => `<span class="post-tag">#${tag}</span>`).join('')}
                        </div>
                        <p>${post.content}</p>
                        <div class="post-stats">
                            <span><i class="far fa-heart"></i> ${post.likes}</span>
                            <span><i class="far fa-comment"></i> ${post.comments}</span>
                        </div>
                        <div class="post-actions-bottom">
                            <button class="post-action-btn ${post.liked ? 'active' : ''}" data-action="like" data-id="${post.id}">
                                <i class="${post.liked ? 'fas' : 'far'} fa-heart"></i> Curtir
                            </button>
                            <button class="post-action-btn" data-action="comment" data-id="${post.id}">
                                <i class="far fa-comment"></i> Comentar
                            </button>
                            <button class="post-action-btn ${post.saved ? 'active' : ''}" data-action="save" data-id="${post.id}">
                                <i class="${post.saved ? 'fas' : 'far'} fa-bookmark"></i> Salvar
                            </button>
                        </div>
                    </div>
                `;
                postsGrid.appendChild(postElement);
                
                // Add event listeners to action buttons
                const likeBtn = postElement.querySelector('[data-action="like"]');
                const commentBtn = postElement.querySelector('[data-action="comment"]');
                const saveBtn = postElement.querySelector('[data-action="save"]');
                
                likeBtn.addEventListener('click', () => toggleLike(post.id));
                commentBtn.addEventListener('click', () => openPostModal(post.id));
                saveBtn.addEventListener('click', () => toggleSave(post.id));
                
                // Open post modal when clicking on the post
                postElement.addEventListener('click', (e) => {
                    if (!e.target.closest('.post-actions-bottom')) {
                        openPostModal(post.id);
                    }
                });
            });
        }

        // Open post modal
        function openPostModal(postId) {
            const post = currentPosts.find(p => p.id === postId);
            if (!post) return;
            
            currentPostId = postId;
            
            // Set modal content
            document.getElementById('modalPostImage').src = post.image;
            document.getElementById('modalPostAuthorAvatar').src = post.authorAvatar;
            document.getElementById('modalPostAuthor').textContent = post.author;
            document.getElementById('modalPostDate').textContent = post.date;
            document.getElementById('modalPostTitle').textContent = post.title;
            document.getElementById('modalPostBody').innerHTML = `<p>${post.content}</p>`;
            document.getElementById('modalPostLikes').textContent = post.likes;
            document.getElementById('modalPostComments').textContent = post.comments;
            
            // Set tags
            const tagsContainer = document.getElementById('modalPostTags');
            tagsContainer.innerHTML = '';
            post.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'post-tag';
                tagElement.textContent = `#${tag}`;
                tagsContainer.appendChild(tagElement);
            });
            
            // Set like and save buttons state
            const likeBtn = document.getElementById('modalLikeBtn');
            const saveBtn = document.getElementById('modalSaveBtn');
            
            likeBtn.innerHTML = post.liked ? '<i class="fas fa-heart"></i> Curtido' : '<i class="far fa-heart"></i> Curtir';
            saveBtn.innerHTML = post.saved ? '<i class="fas fa-bookmark"></i> Salvo' : '<i class="far fa-bookmark"></i> Salvar';
            
            // Clear comments (in a real app, you would fetch comments from the server)
            document.getElementById('commentsList').innerHTML = '<p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>';
            
            showModal(postModal);
        }

        // Toggle like on a post
        function toggleLike(postId) {
            const post = currentPosts.find(p => p.id === postId);
            if (!post) return;
            
            post.liked = !post.liked;
            post.likes += post.liked ? 1 : -1;
            
            // Update UI
            renderPosts(currentPosts);
            
            // If the post modal is open, update it too
            if (currentPostId === postId) {
                const likeBtn = document.getElementById('modalLikeBtn');
                likeBtn.innerHTML = post.liked ? '<i class="fas fa-heart"></i> Curtido' : '<i class="far fa-heart"></i> Curtir';
                document.getElementById('modalPostLikes').textContent = post.likes;
            }
            
            // In a real app, you would send this to the backend
            console.log(`Post ${postId} ${post.liked ? 'liked' : 'unliked'}`);
        }

        // Toggle save on a post
        function toggleSave(postId) {
            const post = currentPosts.find(p => p.id === postId);
            if (!post) return;
            
            post.saved = !post.saved;
            
            // Update UI
            renderPosts(currentPosts);
            
            // If the post modal is open, update it too
            if (currentPostId === postId) {
                const saveBtn = document.getElementById('modalSaveBtn');
                saveBtn.innerHTML = post.saved ? '<i class="fas fa-bookmark"></i> Salvo' : '<i class="far fa-bookmark"></i> Salvar';
            }
            
            // In a real app, you would send this to the backend
            console.log(`Post ${postId} ${post.saved ? 'saved' : 'unsaved'}`);
        }

        // Perform search
        function performSearch() {
            currentSearch = searchInput.value.trim().toLowerCase();
            filterPosts();
        }

        // Filter posts based on current filter and search
        function filterPosts() {
            let filteredPosts = [...postsData];
            
            // Apply search filter
            if (currentSearch) {
                filteredPosts = filteredPosts.filter(post => 
                    post.title.toLowerCase().includes(currentSearch) ||
                    post.content.toLowerCase().includes(currentSearch) ||
                    post.tags.some(tag => tag.toLowerCase().includes(currentSearch)) ||
                    post.author.toLowerCase().includes(currentSearch)
                );
            }
            
            // Apply category filter
            if (currentFilter !== 'all') {
                filteredPosts = filteredPosts.filter(post => post.category === currentFilter);
            }
            
            currentPosts = filteredPosts;
            renderPosts(currentPosts);
        }

        // Show modal
        function showModal(modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Hide modal
        function hideModal(modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Add tag to the new post
        function addTag(tagText) {
            const tag = tagText.trim().toLowerCase();
            if (tag && !tags.includes(tag)) {
                tags.push(tag);
                renderTags();
            }
        }

        // Remove tag from the new post
        function removeTag(tag) {
            tags = tags.filter(t => t !== tag);
            renderTags();
        }

        // Render tags in the tags input
        function renderTags() {
            tagsInput.innerHTML = '';
            tags.forEach(tag => {
                const tagElement = document.createElement('div');
                tagElement.className = 'tag';
                tagElement.innerHTML = `
                    <span>${tag}</span>
                    <span class="tag-remove" data-tag="${tag}">&times;</span>
                `;
                tagsInput.appendChild(tagElement);
                
                // Add event listener to remove tag
                tagElement.querySelector('.tag-remove').addEventListener('click', () => {
                    removeTag(tag);
                });
            });
            
            // Add the input field
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'tag-input';
            input.placeholder = tags.length === 0 ? 'Digite uma tag e pressione Enter' : '';
            input.id = 'tagInput';
            tagsInput.appendChild(input);
            
            // Add event listener to the new input
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    addTag(input.value);
                    input.value = '';
                }
            });
            
            // Focus on the new input
            input.focus();
        }

        // Create a new post
        function createNewPost() {
            const title = document.getElementById('postTitle').value;
            const content = document.getElementById('postContentFull').value;
            const image = document.getElementById('postImage').value;
            const category = document.getElementById('postCategory').value;
            
            if (!title || !content) {
                alert('Por favor, preencha pelo menos o título e o conteúdo do post.');
                return;
            }
            
            // In a real app, you would send this to the backend
            const newPost = {
                id: currentPosts.length + 1,
                title,
                content,
                image: image || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
                author: 'João Silva',
                authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
                date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }),
                tags: tags,
                category,
                likes: 0,
                comments: 0,
                liked: false,
                saved: false
            };
            
            currentPosts.unshift(newPost);
            renderPosts(currentPosts);
            
            // Reset form and close modal
            newPostForm.reset();
            tags = [];
            renderTags();
            hideModal(createPostModal);
            
            alert('Post criado com sucesso!');
        }

        // Update user profile
        function updateProfile() {
            const name = document.getElementById('profileName').value;
            const bio = document.getElementById('profileBio').value;
            const location = document.getElementById('profileLocation').value;
            
            // In a real app, you would send this to the backend
            console.log('Profile updated:', { name, bio, location });
            
            // Update UI
            document.querySelector('.profile-info h1').textContent = name;
            document.querySelector('.profile-info p').textContent = bio;
            document.querySelector('.profile-info p:nth-child(3)').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${location}`;
            document.querySelector('.user-info span').textContent = name;
            document.querySelector('.create-post-header h3').textContent = name;
            
            hideModal(profileModal);
            alert('Perfil atualizado com sucesso!');
        }

        // Initialize the page when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);