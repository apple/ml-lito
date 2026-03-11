// ============ UID to Source URL Mapping ============
// URLs are positionally ordered: set1.uids (lines 1-54), set3.uids (lines 55-70), manual_uids (lines 71-73)
const uidToUrl = {
    '91b031e0cc1b438b8c94bcb6e87aa381': { url: 'https://sketchfab.com/3d-models/91b031e0cc1b438b8c94bcb6e87aa381', author: '@sanyabeast', license: 'CC Attribution' },
    '0adc3010a6383e6416fada98b0a3cbd43012d01c24239528cf4ffbfd395fc242': { url: 'https://sketchfab.com/3d-models/spartan-helmet-f02e2cf48729492c810ff0f5e80ccd21', author: 'Anthony Schmidt', license: 'CC Attribution-NonCommercial' },
    '6c9369e28e4e21de33592cec59ff05615c62ed66e5c1609479e652a21d1ef061': { url: 'https://sketchfab.com/3d-models/flamethrower-robot-dda1a567d85e4c229404dd85c934aaa2', author: 'Javier Martín Hidalgo', license: 'CC Attribution' },
    '7db68b77fafde6de356d426957413882caef929f92adfb608cc7d377ac95bf44': { url: 'https://sketchfab.com/3d-models/art-deco-toaster-1864f9b3e9e74993b2e9b735dc488a9e', author: 'Léonard_Doye / Leoskateman', license: 'CC Attribution' },
    '7dc401c7896b49ba9f9fc2679fbaf231': { url: 'https://sketchfab.com/3d-models/7dc401c7896b49ba9f9fc2679fbaf231', author: 'tibo', license: 'CC Attribution-NonCommercial-ShareAlike' },
    '049c234ae04f42adaed9b2fed13765d1': { url: 'https://sketchfab.com/3d-models/049c234ae04f42adaed9b2fed13765d1', author: 'NEXIC', license: 'CC Attribution' },
    '3fd78d69b770429a8a680caaa65e57e8': { url: 'https://sketchfab.com/3d-models/3fd78d69b770429a8a680caaa65e57e8', author: 'rhcreations', license: 'CC Attribution' },
    '09ab93d83831456a9607b392e4a5104a': { url: 'https://sketchfab.com/3d-models/09ab93d83831456a9607b392e4a5104a', author: 'BlackDeathSS', license: 'CC Attribution' },
    '85ad2e5973859cbbabfeab6e1a4fbf78288703e740d03c174c9b3d3f18d50fca': { url: 'https://sketchfab.com/3d-models/beer-bottle-97eeb4e6a10345c4acc2020e5bab950c', author: 'elouisetrewartha', license: 'CC Attribution-NonCommercial' },
    '07db419ad01384ee1bba8ec8dcf415a34b41af598705bc49f3a11a4ab8f2ec8c': { url: 'https://www.blendswap.com/blend/15747', author: 'slyfox', license: 'CC-BY' },
    '9d9cef93cffc49cbaccc81327c91c554': { url: 'https://sketchfab.com/3d-models/9d9cef93cffc49cbaccc81327c91c554', author: 'LLOYDO', license: 'CC Attribution' },
    '4ab17a1ede0d4765bfa1fe81892d5287': { url: 'https://sketchfab.com/3d-models/4ab17a1ede0d4765bfa1fe81892d5287', author: 'callmed', license: 'CC Attribution' },
    '7d2f3fb43cdc4f4a87720260be83534a': { url: 'https://sketchfab.com/3d-models/7d2f3fb43cdc4f4a87720260be83534a', author: 'Zdzich', license: 'CC Attribution' },
    '83a3fa4744ab4837a339579aacf837e0': { url: 'https://sketchfab.com/3d-models/83a3fa4744ab4837a339579aacf837e0', author: 'pedrosg', license: 'CC Attribution-NonCommercial' },
    'ca3cd06e3dba4d339336d77c167b6876': { url: 'https://sketchfab.com/3d-models/ca3cd06e3dba4d339336d77c167b6876', author: 'r.m.kowalewski', license: 'CC Attribution' },
    '36f0666dfbd50c0375b46d217e584e61390477d5957babd6c52ecc591f2129cd': { url: 'https://sketchfab.com/3d-models/city-trash-can-f336a10e46084212ab33de0ff811bd78', author: '_Tempus_', license: 'CC Attribution' },
    '7fb18cfc0639af25abc0c101e43c72a33adb09724b4eb5e8160baeefd33af754': { url: 'https://sketchfab.com/3d-models/low-poly-penguin-2447f7535657403f8b99256638d011e5', author: 'Noah Hahn', license: 'CC Attribution' },
    '1e912230b43a7581548511cf12813dc7a0c4cee4600000a64fe420b131b39a80': { url: 'https://sketchfab.com/3d-models/cowboy-hat-21c2ba98da75467fa1957baa01b27300', author: 'Blender Artist', license: 'CC Attribution' },
    '1b00692b86e53bf75d34b42fe0ec7ce39ace1919480c63973a869dbf642940aa': { url: 'https://sketchfab.com/3d-models/bottle-hd-08844a5d62de4134a4e1fcf95662cf27', author: 'Al', license: 'CC Attribution' },
    '1b0f727e657fb995a9da29b32ee5c48f1040c141dca7b4af0e315ed338273cb6': { url: 'https://sketchfab.com/3d-models/allan-pinkerton-electric-horse-acd1236756de4ef59cca7d84b7781e5e', author: 'Osho', license: 'CC Attribution' },
    '9b1393b9da5244bffb83598466dd8ad411dd0b2f4d809782dab2bd958cee206e': { url: 'https://sketchfab.com/3d-models/dolphin-statue-9de239460c5240ac99fe6774c9103752', author: 'dj3dim', license: 'CC Attribution' },
    '10fdbf08a3f157a348c75dc70f47e48bf1066e2871024496771a0c6d325e6f9c': { url: 'https://sketchfab.com/3d-models/flower-fast-shop-scan-d3c586389db44a31a3736d9009c08152', author: 'Epic_Tree_Store', license: 'CC Attribution-NonCommercial' },
    'd803fc09d38744d0b9f3ff0078127a96': { url: 'https://sketchfab.com/3d-models/d803fc09d38744d0b9f3ff0078127a96', author: 'SkyyWill', license: 'CC Attribution' },
    'd891c103cddd44b69d1357c832d9ad56': { url: 'https://sketchfab.com/3d-models/d891c103cddd44b69d1357c832d9ad56', author: 'Dmitriy Korotkov', license: 'CC Attribution' },
    '36b3656d60d44061926820c4ffdbbaf5': { url: 'https://sketchfab.com/3d-models/36b3656d60d44061926820c4ffdbbaf5', author: 'MrsM', license: 'CC Attribution-NonCommercial' },
    '0af4bfd183b24d578341157e1775ab1c': { url: 'https://sketchfab.com/3d-models/0af4bfd183b24d578341157e1775ab1c', author: 'andrea.notarstefano', license: 'CC Attribution' },
    '32158d2bdb3f4b8eb89aa3bffd6d068e': { url: 'https://sketchfab.com/3d-models/32158d2bdb3f4b8eb89aa3bffd6d068e', author: 'Deveney Elizabeth', license: 'CC Attribution-NonCommercial' },
    'a6047a2058c64629b4b1f5c998be3430': { url: 'https://sketchfab.com/3d-models/a6047a2058c64629b4b1f5c998be3430', author: 'Nadia Ribitis', license: 'CC Attribution' },
    'b11c22328b614c268f413b0e47348560': { url: 'https://sketchfab.com/3d-models/b11c22328b614c268f413b0e47348560', author: 'Libau Media', license: 'CC Attribution' },
    '04c00fc6f81441f0acf9a1d092efe830': { url: 'https://sketchfab.com/3d-models/04c00fc6f81441f0acf9a1d092efe830', author: 'halenpet', license: 'CC Attribution' },
    '01c67cd4faad42b48b0ba4eff9249974': { url: 'https://sketchfab.com/3d-models/01c67cd4faad42b48b0ba4eff9249974', author: 'Marnick Huysmans', license: 'CC Attribution' },
    '07e2df59b6b23c4847f3680aa40a937170b5a4b343b5945ed5a89390da26a1b8': { url: 'https://sketchfab.com/3d-models/achilles-helmet-7db0659c137242849bb166d3a7d901bf', author: 'Anthony Schmidt', license: 'CC Attribution-NonCommercial' },
    '7a20a2dda4054fc8ac9e8c35fdb6bffb': { url: 'https://sketchfab.com/3d-models/7a20a2dda4054fc8ac9e8c35fdb6bffb', author: 'said15russ', license: 'CC Attribution' },
    '0c3d834c63a9fa46f42ec46e4f37031126d3ff3719403c965aaecd8942676ef7': { url: 'https://sketchfab.com/3d-models/polycarbonate-mug-5ee4647f7994413d80652e10090d380d', author: 'fancyikzero', license: 'CC Attribution' },
    '9fc76de855db3dc922d5b60cc5d6e4a355f978358ec5e0fde2c590d51ea7c3f3': { url: 'https://sketchfab.com/3d-models/tractor-1b258bcc01bf4ed0935ef73e80442c30', author: 'selfie 3D scan', license: 'CC Attribution' },
    '8c940cead2a1230e44e8ad789bafa53a4a5a69ee31e54b8cbe256642a8508713': { url: 'https://sketchfab.com/3d-models/combat-vehicle-crewman-cvc-helmet-vietnam-era-c1516dc3d0ea420b9246334a94e5681e', author: 'olmopotums', license: 'CC Attribution' },
    '7f85746c0c19169d8ef2f02b72f9a6b975bfc3decba15cd9e21d721fdbc5adc8': { url: 'https://www.blendswap.com/blend/7467', author: 'PA3D', license: 'CC-BY' },
    '5b7bc2daa83a848a39eaec8ce349b50094dc394d1c43c94a63ab3f738f4f310c': { url: 'https://sketchfab.com/3d-models/sci-fi-robot-2aa538a68d204182a40f4a09f64f18f5', author: 'Dmitry', license: 'CC Attribution' },
    '1fc29a2816a62e0bd81da24e09b0320f643383488825cdc5a966e30a5e7003ce': { url: 'https://sketchfab.com/3d-models/white-flower-9e025b18a39741a4a38b197cee3cdcac', author: 'tojamerlin', license: 'CC Attribution' },
    '0ce01d366c9e48b0a7a0ec1ce411b7b9': { url: 'https://sketchfab.com/3d-models/0ce01d366c9e48b0a7a0ec1ce411b7b9', author: 'feklo4ka', license: 'CC Attribution' },
    '14e9bb3445e105bf8189eac607ef7b8b24bf9bbe53ac2fd06c3de510647c4a47': { url: 'https://sketchfab.com/3d-models/tree-b5041d5648984ac2b833e2bde96fae85', author: 'Raid', license: 'CC Attribution' },
    '72e3fff63ba54d83973e2b60eb0b1a97': { url: 'https://sketchfab.com/3d-models/72e3fff63ba54d83973e2b60eb0b1a97', author: 'ĐạiNB', license: 'CC Attribution' },
    'c54c32bed0364e11aeefd380950ab361': { url: 'https://sketchfab.com/3d-models/c54c32bed0364e11aeefd380950ab361', author: 'gornostai', license: 'CC Attribution' },
    '69133aa4e0a0442eb08be93876cbbf12': { url: 'https://sketchfab.com/3d-models/69133aa4e0a0442eb08be93876cbbf12', author: 'agata.m', license: 'CC Attribution' },
    '61917a7224a54369ac23fef701fcd929': { url: 'https://sketchfab.com/3d-models/61917a7224a54369ac23fef701fcd929', author: 'pauazap', license: 'CC Attribution' },
    '4175acfc9fc647fc8f0b90cb13db4bea': { url: 'https://sketchfab.com/3d-models/4175acfc9fc647fc8f0b90cb13db4bea', author: 'SkinRender', license: 'CC Attribution' },
    '460ddcac7c744f3ab3ddf17ea249912d': { url: 'https://sketchfab.com/3d-models/460ddcac7c744f3ab3ddf17ea249912d', author: 'Llockart', license: 'CC Attribution' },
    '16e47a889f8ebe3a0c50231f9cd18a5448ba76f37612400e3f788671717a01ff': { url: 'https://sketchfab.com/3d-models/hei-hei-e17580d57faf429d8352d6d433a5f7f8', author: 'shashi.atin', license: 'CC Attribution' },
    '760912c18376430ea8ab51d0904a39ba': { url: 'https://sketchfab.com/3d-models/760912c18376430ea8ab51d0904a39ba', author: 'ccliao', license: 'CC Attribution' },
    '7b6466975b0de5ae4cc6c4e077553d0c2c8d7f81429ff512bf1051492ed1a3f4': { url: 'https://sketchfab.com/3d-models/rusty-open-trash-can-a6c297837fe74bea9e86bab3fa2413f2', author: 'Anwar Ali', license: 'CC Attribution' },
    '23d513354fcb4d46b4efd614abe4dae5': { url: 'https://sketchfab.com/3d-models/23d513354fcb4d46b4efd614abe4dae5', author: 'CkTheMask', license: 'CC Attribution' },
    '8de4a47667db9c2fd69981997d8e5503d2ae86a942420291e9c313cc1fc797a0': { url: 'https://sketchfab.com/3d-models/shenron-dragon-ball-96e8ad1e206941ce859c5733bec75d30', author: 'Yanez Designs', license: 'CC Attribution' },
    'c700e7c131454303b3a87d7a264e7252': { url: 'https://sketchfab.com/3d-models/c700e7c131454303b3a87d7a264e7252', author: 'Yudha Mfr', license: 'CC Attribution' },
    'c0c4939d4f6551178e9978b8b735d71377a64d0264285ed4f5743683cca8e8ce': { url: 'https://sketchfab.com/3d-models/cartoon-trex-597af60bc9124b858e147769acb504a1', author: 'BlueMesh', license: 'CC Attribution' },
    '6118b85f1393066ea2803c8e7df2dfe30aa360911b3568a749e412c6e4696a1c': { url: 'https://blendswap.com/blend/3349', author: 'stuart.t', license: 'CC-BY-SA' },
    '26019f089475448a30e81da621b2b64ffcbf3016b9dc9d63cdaf82f05133646a': { url: 'https://www.blendswap.com/blend/8488', author: 'cephei', license: 'CC-BY' },
    'ef4376e0a705964f500e709eeb2c6a404877926f11a25399c21129e981793052': { url: 'https://sketchfab.com/3d-models/cartoon-tractor-t40-4a7834eb57584d9fa8b74ab5f28e4ec2', author: 'brysew', license: 'CC Attribution-NonCommercial' },
    'ee944d9677f4d6f4d17a9bd27b4b6d1670c52dfe37d90beb33712644aba1b917': { url: 'https://sketchfab.com/3d-models/nuka-bottle-ee53dbabd411494b99e74be3a7e5fe1f', author: 'Jakob Pihl', license: 'CC Attribution' },
    '98fb4c19fd79d8d76916b42403f316553a90dea34fbde4e5dbb0356904655141': { url: 'https://sketchfab.com/3d-models/colored-flower-6b3020fed29c4976bc44ed1b7cb7e960', author: 'tojamerlin', license: 'CC Attribution' },
    'f4044d3df7b15fc7d605fc8e01e88ab64c6be28edac378efb9988580d25b1cb0': { url: 'https://blendswap.com/blend/14422', author: 'mond', license: 'CC-BY' },
    'f3c256bc3a4799ab210bb57a900f30ffbed7af63786b4f2e515838531e80a46f': { url: 'https://sketchfab.com/3d-models/robopolice-643353e8aebf4a00b074cd92e764e09f', author: 'ilasolomon', license: 'CC Attribution' },
    'ec48bfb5fb1b2011e88c124158984f46e6d87ca296b8707c8fcb941af0d78eea': { url: 'https://sketchfab.com/3d-models/red-motorbike-0335a2fffa8a468ba881cbb97b7526d0', author: 'Finley Searle', license: 'CC Attribution' },
    'f9856a9523949eda1bd9af9bdeae4d7bd120b04fce895a8a564cddd7304a6752': { url: 'https://sketchfab.com/3d-models/hammer-d343cb867d164752ace6af978a0f0bd6', author: 'Halpho', license: 'CC Attribution' },
    '91def5598aff57d0a3516f2269fd18d1eb02774e8bb0b1d3e5271073c3677799': { url: 'https://sketchfab.com/3d-models/low-poly-helmet-173f4358418c4407b905df3d51f54c9c', author: 'Raystani E. de Oliveira', license: 'CC Attribution' },
    '67331f8508b1b923d63fe5e0ceb19883ac4dfc9ccc9297dece847e613d882142': { url: 'https://sketchfab.com/3d-models/fox-58e93896d1a14eb9af7b776272a48ed6', author: 'ReeceLaudat', license: 'CC Attribution' },
    'f2f2f0aa4f815b117ff20de1d9fcb94f050220383f1f7f185b538769387f2a75': { url: 'https://sketchfab.com/3d-models/hammer-of-war-356cd3a4153a49ed9777b64a460edc27', author: 'MrTomas', license: 'CC Attribution' },
    '240bce47be65b34ec41cc74e3ee67830db9839f340497e87d84de47a60acbd36': { url: 'https://sketchfab.com/3d-models/flowers-a124cf40a048434aa662cd7de41baac3', author: 'Akmyrat Tuyliyev', license: 'CC Attribution' },
    '7433e831c0c232895ab73f3adf66a0263da2474ee2fbc5547906aa100977fa13': { url: 'https://sketchfab.com/3d-models/robosolider-df046763ce104ef0a0f96fee05a14a12', author: 'm.marinov', license: 'CC Attribution' },
    '91eb0eb061024bf1bc5e3eb5ffe385d8': { url: 'https://sketchfab.com/3d-models/robot-steampunk-3d-coat-45-pbr-91eb0eb061024bf1bc5e3eb5ffe385d8', author: '3d-coat', license: 'CC Attribution' },
    '12d857738501468387cd17a82872da28': { url: 'https://sketchfab.com/3d-models/fantasy-plague-doctor-mask-12d857738501468387cd17a82872da28', author: 'VavNikTonik', license: 'CC Attribution-NoDerivs' },
    'd5e6b6a11da646f68a5fcba661dcae99': { url: 'https://sketchfab.com/3d-models/lion-crushing-a-serpent-d5e6b6a11da646f68a5fcba661dcae99', author: 'Rigsters', license: 'CC Attribution' },
};

function updateAssetLink(uid, elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const entry = uidToUrl[uid];
    if (entry && entry.url) {
        el.innerHTML = `The original 3D asset was created by ${entry.author} and is distributed under the ${entry.license} license.<br>We accessed it from <a href="${entry.url}" target="_blank">here</a> in March 2026.`;
        el.style.display = '';
    } else {
        el.innerHTML = '';
        el.style.display = 'none';
    }
}

// ============ Shared Utilities ============

// Sync video playback across multiple videos
function syncVideos(videos) {
    videos.forEach(video => {
        video.addEventListener('play', () => {
            const currentTime = video.currentTime;
            videos.forEach(v => {
                if (v !== video && v.paused) {
                    v.currentTime = currentTime;
                    v.play();
                }
            });
        });

        video.addEventListener('seeked', () => {
            const currentTime = video.currentTime;
            videos.forEach(v => {
                if (v !== video && Math.abs(v.currentTime - currentTime) > 0.1) {
                    v.currentTime = currentTime;
                }
            });
        });
    });
}

// ============ Video Sets Data ============
const videoSets = {
    set1: {
        folder: 'videos/reconstruction',
        uids: [
            ['91b031e0cc1b438b8c94bcb6e87aa381', 'Objaverse-XL'],
            ['0adc3010a6383e6416fada98b0a3cbd43012d01c24239528cf4ffbfd395fc242', 'Toys-4k'],
            ['6c9369e28e4e21de33592cec59ff05615c62ed66e5c1609479e652a21d1ef061', 'Toys-4k'],
            ['7db68b77fafde6de356d426957413882caef929f92adfb608cc7d377ac95bf44', 'Toys-4k'],
            ['7dc401c7896b49ba9f9fc2679fbaf231', 'Objaverse-XL'],
            ['049c234ae04f42adaed9b2fed13765d1', 'Objaverse-XL'],
            ['3fd78d69b770429a8a680caaa65e57e8', 'Objaverse-XL'],
            ['09ab93d83831456a9607b392e4a5104a', 'Objaverse-XL'],
            ['85ad2e5973859cbbabfeab6e1a4fbf78288703e740d03c174c9b3d3f18d50fca', 'Toys-4k'],
            ['07db419ad01384ee1bba8ec8dcf415a34b41af598705bc49f3a11a4ab8f2ec8c', 'Toys-4k'],
            ['9d9cef93cffc49cbaccc81327c91c554', 'Objaverse-XL'],
            ['4ab17a1ede0d4765bfa1fe81892d5287', 'Objaverse-XL'],
            ['7d2f3fb43cdc4f4a87720260be83534a', 'Objaverse-XL'],
            ['83a3fa4744ab4837a339579aacf837e0', 'Objaverse-XL'],
            ['ca3cd06e3dba4d339336d77c167b6876', 'Objaverse-XL'],
            ['36f0666dfbd50c0375b46d217e584e61390477d5957babd6c52ecc591f2129cd', 'Toys-4k'],
            ['7fb18cfc0639af25abc0c101e43c72a33adb09724b4eb5e8160baeefd33af754', 'Toys-4k'],
            ['1e912230b43a7581548511cf12813dc7a0c4cee4600000a64fe420b131b39a80', 'Toys-4k'],
            ['1b00692b86e53bf75d34b42fe0ec7ce39ace1919480c63973a869dbf642940aa', 'Toys-4k'],
            ['1b0f727e657fb995a9da29b32ee5c48f1040c141dca7b4af0e315ed338273cb6', 'Toys-4k'],
            ['9b1393b9da5244bffb83598466dd8ad411dd0b2f4d809782dab2bd958cee206e', 'Toys-4k'],
            ['10fdbf08a3f157a348c75dc70f47e48bf1066e2871024496771a0c6d325e6f9c', 'Toys-4k'],
            ['d803fc09d38744d0b9f3ff0078127a96', 'Objaverse-XL'],
            ['d891c103cddd44b69d1357c832d9ad56', 'Objaverse-XL'],
            ['36b3656d60d44061926820c4ffdbbaf5', 'Objaverse-XL'],
            ['0af4bfd183b24d578341157e1775ab1c', 'Objaverse-XL'],
            ['32158d2bdb3f4b8eb89aa3bffd6d068e', 'Objaverse-XL'],
            ['a6047a2058c64629b4b1f5c998be3430', 'Objaverse-XL'],
            ['b11c22328b614c268f413b0e47348560', 'Objaverse-XL'],
            ['04c00fc6f81441f0acf9a1d092efe830', 'Objaverse-XL'],
            ['01c67cd4faad42b48b0ba4eff9249974', 'Objaverse-XL'],
            ['07e2df59b6b23c4847f3680aa40a937170b5a4b343b5945ed5a89390da26a1b8', 'Toys-4k'],
            ['7a20a2dda4054fc8ac9e8c35fdb6bffb', 'Objaverse-XL'],
            ['0c3d834c63a9fa46f42ec46e4f37031126d3ff3719403c965aaecd8942676ef7', 'Toys-4k'],
            ['9fc76de855db3dc922d5b60cc5d6e4a355f978358ec5e0fde2c590d51ea7c3f3', 'Toys-4k'],
            ['8c940cead2a1230e44e8ad789bafa53a4a5a69ee31e54b8cbe256642a8508713', 'Toys-4k'],
            ['7f85746c0c19169d8ef2f02b72f9a6b975bfc3decba15cd9e21d721fdbc5adc8', 'Toys-4k'],
            ['5b7bc2daa83a848a39eaec8ce349b50094dc394d1c43c94a63ab3f738f4f310c', 'Toys-4k'],
            ['1fc29a2816a62e0bd81da24e09b0320f643383488825cdc5a966e30a5e7003ce', 'Toys-4k'],
            ['0ce01d366c9e48b0a7a0ec1ce411b7b9', 'Objaverse-XL'],
            ['14e9bb3445e105bf8189eac607ef7b8b24bf9bbe53ac2fd06c3de510647c4a47', 'Toys-4k'],
            ['72e3fff63ba54d83973e2b60eb0b1a97', 'Objaverse-XL'],
            ['c54c32bed0364e11aeefd380950ab361', 'Objaverse-XL'],
            ['69133aa4e0a0442eb08be93876cbbf12', 'Objaverse-XL'],
            ['61917a7224a54369ac23fef701fcd929', 'Objaverse-XL'],
            ['4175acfc9fc647fc8f0b90cb13db4bea', 'Objaverse-XL'],
            ['460ddcac7c744f3ab3ddf17ea249912d', 'Objaverse-XL'],
            ['16e47a889f8ebe3a0c50231f9cd18a5448ba76f37612400e3f788671717a01ff', 'Toys-4k'],
            ['760912c18376430ea8ab51d0904a39ba', 'Objaverse-XL'],
            ['7b6466975b0de5ae4cc6c4e077553d0c2c8d7f81429ff512bf1051492ed1a3f4', 'Toys-4k'],
            ['23d513354fcb4d46b4efd614abe4dae5', 'Objaverse-XL'],
            ['8de4a47667db9c2fd69981997d8e5503d2ae86a942420291e9c313cc1fc797a0', 'Toys-4k'],
            ['c700e7c131454303b3a87d7a264e7252', 'Objaverse-XL']
        ],
        methods: ['trellis', 'ours', 'gt'],
        currentPage: 1
    },
    set3: {
        folder: 'videos/gen_toys4k',
        manual_folder: 'videos/gen_manual',
        manual_uids: [
            "91eb0eb061024bf1bc5e3eb5ffe385d8",
            "12d857738501468387cd17a82872da28",
            "d5e6b6a11da646f68a5fcba661dcae99",
        ],
        manual_methods: ['trellis', 'ours'],
        uids: [
            ['c0c4939d4f6551178e9978b8b735d71377a64d0264285ed4f5743683cca8e8ce', 'Toys-4k'],
            ['6118b85f1393066ea2803c8e7df2dfe30aa360911b3568a749e412c6e4696a1c', 'Toys-4k'],
            ['26019f089475448a30e81da621b2b64ffcbf3016b9dc9d63cdaf82f05133646a', 'Toys-4k'],
            ['1b0f727e657fb995a9da29b32ee5c48f1040c141dca7b4af0e315ed338273cb6', 'Toys-4k'],
            ['ef4376e0a705964f500e709eeb2c6a404877926f11a25399c21129e981793052', 'Toys-4k'],
            ['ee944d9677f4d6f4d17a9bd27b4b6d1670c52dfe37d90beb33712644aba1b917', 'Toys-4k'],
            ['98fb4c19fd79d8d76916b42403f316553a90dea34fbde4e5dbb0356904655141', 'Toys-4k'],
            ['f4044d3df7b15fc7d605fc8e01e88ab64c6be28edac378efb9988580d25b1cb0', 'Toys-4k'],
            ['f3c256bc3a4799ab210bb57a900f30ffbed7af63786b4f2e515838531e80a46f', 'Toys-4k'],
            ['ec48bfb5fb1b2011e88c124158984f46e6d87ca296b8707c8fcb941af0d78eea', 'Toys-4k'],
            ['f9856a9523949eda1bd9af9bdeae4d7bd120b04fce895a8a564cddd7304a6752', 'Toys-4k'],
            ['91def5598aff57d0a3516f2269fd18d1eb02774e8bb0b1d3e5271073c3677799', 'Toys-4k'],
            ['67331f8508b1b923d63fe5e0ceb19883ac4dfc9ccc9297dece847e613d882142', 'Toys-4k'],
            ['f2f2f0aa4f815b117ff20de1d9fcb94f050220383f1f7f185b538769387f2a75', 'Toys-4k'],
            ['240bce47be65b34ec41cc74e3ee67830db9839f340497e87d84de47a60acbd36', 'Toys-4k'],
            ['7433e831c0c232895ab73f3adf66a0263da2474ee2fbc5547906aa100977fa13', 'Toys-4k']
        ],
        methods: ['trellis', 'ours', 'gt'],
        currentPage: 1
    }
};

// ============ Reconstruction Slider Comparison Functionality ============
const sliderComparisonData = {
    folder: 'videos/reconstruction',
    uids: videoSets.set1.uids,
    currentIndex: 0
};

// Create snapshots - using thumbnails instead of loading videos
function createSnapshots() {
    const snapshotRow = document.getElementById('snapshot-row');
    sliderComparisonData.uids.forEach((uid, index) => {
        const snapshot = document.createElement('div');
        snapshot.className = 'snapshot-item';
        if (index === 0) snapshot.classList.add('active');
        snapshot.dataset.index = index;

        // Use thumbnail image
        const img = document.createElement('img');
        img.src = `${sliderComparisonData.folder}/${uid[0]}_thumb.png`;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        snapshot.appendChild(img);
        snapshot.addEventListener('click', () => selectSnapshot(index));
        snapshotRow.appendChild(snapshot);
    });
}

// Select snapshot
function selectSnapshot(index) {
    sliderComparisonData.currentIndex = index;

    // Update active snapshot
    document.querySelectorAll('.snapshot-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    // Load videos
    loadComparisonVideos();

    // Scroll snapshot into view
    const snapshot = document.querySelector(`.snapshot-item[data-index="${index}"]`);
    if (snapshot) {
        snapshot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

// Load comparison videos with strict synchronization
function loadComparisonVideos() {
    const uid = sliderComparisonData.uids[sliderComparisonData.currentIndex];

    // Get all video elements
    const videos = [
        document.getElementById('gt-video'),
        document.getElementById('ours-video'),
        document.getElementById('trellis-video')
    ];

    // Set sources
    videos[0].src = `${sliderComparisonData.folder}/${uid[0]}_gt.mp4`;
    videos[1].src = `${sliderComparisonData.folder}/${uid[0]}_ours.mp4`;
    videos[2].src = `${sliderComparisonData.folder}/${uid[0]}_trellis.mp4`;

    // Update UID display if element exists
    const uidDisplay = document.getElementById('comparison-uid');
    if (uidDisplay) {
        uidDisplay.textContent = `${uid[1]} UID: ${uid[0]}`;
    }

    // Update asset source link
    updateAssetLink(uid[0], 'recon-asset-link');

    // Wait for ALL videos to be ready, then play them simultaneously for strict sync
    let readyCount = 0;
    const totalVideos = videos.length;

    const onReady = () => {
        readyCount++;
        if (readyCount === totalVideos) {
            // All videos are ready - sync to start position and play simultaneously
            videos.forEach(v => v.currentTime = 0);
            videos.forEach(v => v.play().catch(() => {}));
            // Update play/pause button to show pause icon
            const playPauseBtn = document.getElementById('play-pause-btn');
            const pauseIconSVG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="#6c757d"/></svg>';
            playPauseBtn.innerHTML = pauseIconSVG;
            playPauseBtn.setAttribute('aria-label', 'Pause');
        }
    };

    videos.forEach(video => {
        video.addEventListener('loadedmetadata', onReady, { once: true });
    });
}

// Snapshot navigation
document.getElementById('snapshot-prev').addEventListener('click', () => {
    const row = document.getElementById('snapshot-row');
    row.scrollBy({ left: -250, behavior: 'smooth' });
});

document.getElementById('snapshot-next').addEventListener('click', () => {
    const row = document.getElementById('snapshot-row');
    row.scrollBy({ left: 250, behavior: 'smooth' });
});

// Video Control Buttons - Toggle Play/Pause
const playPauseBtn = document.getElementById('play-pause-btn');
const allVideos = [
    document.getElementById('gt-video'),
    document.getElementById('ours-video'),
    document.getElementById('trellis-video')
];

// SVG icons
const playIconSVG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z" fill="#6c757d"/></svg>';
const pauseIconSVG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="#6c757d"/></svg>';

playPauseBtn.addEventListener('click', () => {
    const isPlaying = !allVideos[0].paused;

    if (isPlaying) {
        // Pause videos
        allVideos.forEach(video => video && video.pause());
        playPauseBtn.innerHTML = playIconSVG;
        playPauseBtn.setAttribute('aria-label', 'Play');
    } else {
        // Play videos
        allVideos.forEach(video => video && video.play().catch(() => {}));
        playPauseBtn.innerHTML = pauseIconSVG;
        playPauseBtn.setAttribute('aria-label', 'Pause');
    }
});

// Update button icon when videos end
allVideos[0].addEventListener('ended', () => {
    playPauseBtn.innerHTML = playIconSVG;
    playPauseBtn.setAttribute('aria-label', 'Play');
});

// Progress bar for reconstruction videos
const videoProgress = document.getElementById('video-progress');
const reconstructionVideos = [
    document.getElementById('gt-video'),
    document.getElementById('ours-video'),
    document.getElementById('trellis-video')
];

let isReconSeeking = false;
let reconSeekTimeout = null;

// Update progress bar as video plays
reconstructionVideos[0].addEventListener('timeupdate', () => {
    if (!isReconSeeking && reconstructionVideos[0].duration) {
        const progress = (reconstructionVideos[0].currentTime / reconstructionVideos[0].duration) * 100;
        videoProgress.value = progress;
    }
});

// Track when user starts dragging
videoProgress.addEventListener('mousedown', () => {
    isReconSeeking = true;
});

videoProgress.addEventListener('touchstart', () => {
    isReconSeeking = true;
});

// Throttled seek during drag
videoProgress.addEventListener('input', (e) => {
    // Clear any pending seek
    if (reconSeekTimeout) {
        clearTimeout(reconSeekTimeout);
    }

    // Throttle to every 16ms (roughly 60fps)
    reconSeekTimeout = setTimeout(() => {
        const seekTime = (e.target.value / 100) * reconstructionVideos[0].duration;
        reconstructionVideos.forEach(video => {
            if (video && video.duration) {
                video.currentTime = seekTime;
            }
        });
    }, 16);
});

// Track when user finishes dragging
videoProgress.addEventListener('mouseup', () => {
    isReconSeeking = false;
});

videoProgress.addEventListener('touchend', () => {
    isReconSeeking = false;
});

// Initialize comparison
createSnapshots();
loadComparisonVideos();

// Set up video synchronization once
syncVideos(reconstructionVideos);

// ============ Generation Comparison Functionality ============
const genComparisonData = {
    manual_folder: 'videos/gen_manual',
    toys4k_folder: 'videos/gen_toys4k',
    manual_uids: [
        "91eb0eb061024bf1bc5e3eb5ffe385d8",
        "12d857738501468387cd17a82872da28",
        "d5e6b6a11da646f68a5fcba661dcae99",
    ],
    toys4k_uids: videoSets.set3.uids,
    currentIndex: 0
};

// Combine all UIDs with their source information
const allGenData = [
    ...genComparisonData.manual_uids.map(uid => ({ uid, source: 'manual', dataset: 'Sketchfab' })),
    ...genComparisonData.toys4k_uids.map(([uid, dataset]) => ({ uid, source: 'toys4k', dataset }))
];

// Create generation snapshots - using thumbnails instead of loading images
function createGenSnapshots() {
    const snapshotRow = document.getElementById('gen-snapshot-row');
    allGenData.forEach((data, index) => {
        const snapshot = document.createElement('div');
        snapshot.className = 'snapshot-item';
        if (index === 0) snapshot.classList.add('active');
        snapshot.dataset.index = index;

        // Use thumbnail image
        const img = document.createElement('img');
        if (data.source === 'manual') {
            img.src = `${genComparisonData.manual_folder}/${data.uid}_thumb.png`;
        } else {
            img.src = `${genComparisonData.toys4k_folder}/${data.uid}_thumb.png`;
        }
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        snapshot.appendChild(img);
        snapshot.addEventListener('click', () => selectGenSnapshot(index));
        snapshotRow.appendChild(snapshot);
    });
}

// Select generation snapshot
function selectGenSnapshot(index) {
    genComparisonData.currentIndex = index;

    // Update active snapshot
    document.querySelectorAll('#gen-snapshot-row .snapshot-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    // Load media
    loadGenComparison();

    // Scroll snapshot into view
    const snapshot = document.querySelector(`#gen-snapshot-row .snapshot-item[data-index="${index}"]`);
    if (snapshot) {
        snapshot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

// Load generation comparison with strict synchronization
function loadGenComparison() {
    const data = allGenData[genComparisonData.currentIndex];
    const condImage = document.getElementById('gen-cond-image');

    const oursVideo = document.getElementById('gen-ours-video');
    const trellisVideo = document.getElementById('gen-trellis-video');

    // Set sources
    if (data.source === 'manual') {
        condImage.src = `${genComparisonData.manual_folder}/${data.uid}_input.png`;
        oursVideo.src = `${genComparisonData.manual_folder}/output_${data.uid}_ours.mp4`;
        trellisVideo.src = `${genComparisonData.manual_folder}/output_${data.uid}_trellis.mp4`;
    } else {
        condImage.src = `${genComparisonData.toys4k_folder}/${data.uid}_cond.png`;
        oursVideo.src = `${genComparisonData.toys4k_folder}/${data.uid}_ours.mp4`;
        trellisVideo.src = `${genComparisonData.toys4k_folder}/${data.uid}_trellis.mp4`;
    }

    // Update UID display if element exists
    const genUidDisplay = document.getElementById('gen-comparison-uid');
    if (genUidDisplay) {
        genUidDisplay.textContent = `${data.dataset} UID: ${data.uid}`;
    }

    // Update asset source link
    updateAssetLink(data.uid, 'gen-asset-link');

    // Wait for BOTH videos to be ready, then play simultaneously for strict sync
    const videos = [oursVideo, trellisVideo];
    let readyCount = 0;

    const onReady = () => {
        readyCount++;
        if (readyCount === 2) {
            // Both videos are ready - sync to start position and play simultaneously
            videos.forEach(v => v.currentTime = 0);
            videos.forEach(v => v.play().catch(() => {}));
            // Update play/pause button to show pause icon
            const genPlayPauseBtn = document.getElementById('gen-play-pause-btn');
            const genPauseIconSVG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="#6c757d"/></svg>';
            genPlayPauseBtn.innerHTML = genPauseIconSVG;
            genPlayPauseBtn.setAttribute('aria-label', 'Pause');
        }
    };

    videos.forEach(video => {
        video.addEventListener('loadedmetadata', onReady, { once: true });
    });
}

// Generation snapshot navigation
document.getElementById('gen-snapshot-prev').addEventListener('click', () => {
    const row = document.getElementById('gen-snapshot-row');
    row.scrollBy({ left: -250, behavior: 'smooth' });
});

document.getElementById('gen-snapshot-next').addEventListener('click', () => {
    const row = document.getElementById('gen-snapshot-row');
    row.scrollBy({ left: 250, behavior: 'smooth' });
});

// Generation video control buttons - Toggle Play/Pause
const genPlayPauseBtn = document.getElementById('gen-play-pause-btn');
const genVideos = [
    document.getElementById('gen-ours-video'),
    document.getElementById('gen-trellis-video')
];

// SVG icons for generation section
const genPlayIconSVG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z" fill="#6c757d"/></svg>';
const genPauseIconSVG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="#6c757d"/></svg>';

genPlayPauseBtn.addEventListener('click', () => {
    const isPlaying = !genVideos[0].paused;

    if (isPlaying) {
        // Pause videos
        genVideos.forEach(video => video && video.pause());
        genPlayPauseBtn.innerHTML = genPlayIconSVG;
        genPlayPauseBtn.setAttribute('aria-label', 'Play');
    } else {
        // Play videos
        genVideos.forEach(video => video && video.play().catch(() => {}));
        genPlayPauseBtn.innerHTML = genPauseIconSVG;
        genPlayPauseBtn.setAttribute('aria-label', 'Pause');
    }
});

// Update button icon when videos end
genVideos[0].addEventListener('ended', () => {
    genPlayPauseBtn.innerHTML = genPlayIconSVG;
    genPlayPauseBtn.setAttribute('aria-label', 'Play');
});

// Progress bar for generation videos
const genVideoProgress = document.getElementById('gen-video-progress');

let isGenSeeking = false;
let genSeekTimeout = null;

// Update progress bar as video plays
genVideos[0].addEventListener('timeupdate', () => {
    if (!isGenSeeking && genVideos[0].duration) {
        const progress = (genVideos[0].currentTime / genVideos[0].duration) * 100;
        genVideoProgress.value = progress;
    }
});

// Track when user starts dragging
genVideoProgress.addEventListener('mousedown', () => {
    isGenSeeking = true;
});

genVideoProgress.addEventListener('touchstart', () => {
    isGenSeeking = true;
});

// Throttled seek during drag
genVideoProgress.addEventListener('input', (e) => {
    // Clear any pending seek
    if (genSeekTimeout) {
        clearTimeout(genSeekTimeout);
    }

    // Throttle to every 16ms (roughly 60fps)
    genSeekTimeout = setTimeout(() => {
        const seekTime = (e.target.value / 100) * genVideos[0].duration;
        genVideos.forEach(video => {
            if (video && video.duration) {
                video.currentTime = seekTime;
            }
        });
    }, 16);
});

// Track when user finishes dragging
genVideoProgress.addEventListener('mouseup', () => {
    isGenSeeking = false;
});

genVideoProgress.addEventListener('touchend', () => {
    isGenSeeking = false;
});

// Initialize generation comparison - DEFERRED until section is visible
createGenSnapshots();

// Use Intersection Observer to load generation videos only when section becomes visible
let genVideosLoaded = false;
const genSection = document.querySelector('#generation-comparison').closest('.main-section');
const genObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !genVideosLoaded) {
            genVideosLoaded = true;
            loadGenComparison();
        }
    });
}, { threshold: 0.1 });

genObserver.observe(genSection);

// Set up video synchronization once for generation videos
const generationVideos = [
    document.getElementById('gen-ours-video'),
    document.getElementById('gen-trellis-video')
];
syncVideos(generationVideos);

// ============ Gaussian Gallery Navigation ============
document.getElementById('gaussian-prev').addEventListener('click', () => {
    const gallery = document.getElementById('gaussian-gallery');
    gallery.scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById('gaussian-next').addEventListener('click', () => {
    const gallery = document.getElementById('gaussian-gallery');
    gallery.scrollBy({ left: 300, behavior: 'smooth' });
});
