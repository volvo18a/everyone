<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon" :class="type" :width="width" viewBox="0 0 1024 1024" version="1.1" p-id="2427">
        <path :d="svg[type]" :fill="color"/>
    </svg>
</template>
<script>
const svg = {
    loading: 'M923.424 447.744M512.064 963.296c-96.16 0-189.344-30.816-267.68-89.472-95.744-71.712-157.856-176.48-174.848-294.912-16.992-118.464 13.152-236.448 84.864-332.224 148.096-197.76 429.44-238.08 627.136-90.08 82.88 62.08 142.016 151.584 166.56 252 4.192 17.184-6.336 34.496-23.488 38.688-17.152 4.064-34.496-6.304-38.688-23.488-20.992-86.048-71.68-162.752-142.752-215.968C573.792 80.96 332.608 115.552 205.632 285.056c-61.472 82.08-87.296 183.2-72.704 284.736 14.56 101.536 67.808 191.296 149.888 252.736 169.536 127.04 410.688 92.384 537.6-77.12 33.216-44.384 56-94.112 67.648-147.84 3.776-17.28 20.896-28.256 38.048-24.512 17.28 3.744 28.256 20.8 24.512 38.048-13.664 62.784-40.224 120.832-78.976 172.672-71.712 95.744-176.48 157.888-294.976 174.848C555.072 961.76 533.504 963.296 512.064 963.296z',
    info: 'M512 65.983389c-245.952318 0-446.016611 200.064292-446.016611 446.016611S266.047682 958.016611 512 958.016611 958.016611 757.952318 958.016611 512 757.952318 65.983389 512 65.983389zM544.00086 736.00086c0 17.695686-14.303454 32.00086-32.00086 32.00086s-32.00086-14.303454-32.00086-32.00086L479.99914 448c0-17.695686 14.303454-32.00086 32.00086-32.00086 17.695686 0 32.00086 14.303454 32.00086 32.00086L544.00086 736.00086zM512 352.00086c-26.496224 0-48.00043-21.53689-48.00043-48.00043 0-26.527187 21.504206-48.00043 48.00043-48.00043s48.00043 21.471523 48.00043 48.00043C560.00043 330.46397 538.496224 352.00086 512 352.00086z',
    checkmark: 'M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016C958.016 266.08 757.952 65.984 512 65.984zM727.232 438.432l-256.224 259.008c-0.064 0.064-0.192 0.096-0.256 0.192-0.096 0.064-0.096 0.192-0.192 0.256-2.048 1.984-4.576 3.2-6.944 4.544-1.184 0.672-2.144 1.696-3.392 2.176-3.84 1.536-7.904 2.336-11.968 2.336-4.096 0-8.224-0.8-12.096-2.4-1.28-0.544-2.304-1.632-3.52-2.304-2.368-1.344-4.832-2.528-6.88-4.544-0.064-0.064-0.096-0.192-0.16-0.256-0.064-0.096-0.192-0.096-0.256-0.192l-126.016-129.504c-12.32-12.672-12.032-32.928 0.64-45.248 12.672-12.288 32.896-12.064 45.248 0.64l103.264 106.112 233.28-235.84c12.416-12.576 32.704-12.704 45.248-0.256C739.52 405.6 739.648 425.856 727.232 438.432z',
    help: 'M512 64c-247.039484 0-448 200.960516-448 448S264.960516 960 512 960 960 759.039484 960 512 759.039484 64 512 64zM512 832.352641c-26.496224 0-48.00043-21.504206-48.00043-48.00043 0-26.496224 21.504206-48.00043 48.00043-48.00043s48.00043 21.504206 48.00043 48.00043S538.496224 832.352641 512 832.352641zM600.576482 505.184572c-27.839699 27.808735-56.575622 56.544658-56.575622 82.368284l0 54.112297c0 17.664722-14.336138 32.00086-32.00086 32.00086s-32.00086-14.336138-32.00086-32.00086l0-54.112297c0-52.352533 39.999785-92.352318 75.32751-127.647359 25.887273-25.887273 52.67249-52.639806 52.67249-73.984034 0-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303 0-95.99914 41.535923-95.99914 94.559333 0 17.664722-14.336138 31.99914-32.00086 31.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948 71.775299-158.559333 160.00086-158.559333s160.00086 72.095256 160.00086 160.735385C672.00086 433.791157 635.680581 470.080473 600.576482 505.184572z',
    close: 'M512 64C264.992 64 64 264.96 64 512s200.96 448 448 448c247.008 0 448-200.96 448-448S759.04 64 512 64zM694.752 649.984c12.48 12.544 12.448 32.768-0.064 45.248-6.24 6.208-14.4 9.344-22.592 9.344-8.224 0-16.416-3.136-22.656-9.408l-137.6-138.016-138.048 136.576c-6.24 6.144-14.368 9.248-22.496 9.248-8.256 0-16.48-3.168-22.752-9.504-12.416-12.576-12.32-32.8 0.256-45.248l137.888-136.384-137.376-137.824c-12.48-12.512-12.448-32.768 0.064-45.248 12.512-12.512 32.736-12.448 45.248 0.064l137.568 137.984 138.048-136.576c12.544-12.448 32.832-12.32 45.248 0.256 12.448 12.576 12.32 32.832-0.256 45.248l-137.888 136.384L694.752 649.984z',
    x: 'M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z',
    v: 'M890.336 330.912c-12.576-12.416-32.8-12.352-45.248 0.192L517.248 661.952 184.832 332.512c-12.576-12.448-32.8-12.352-45.28 0.192-12.448 12.576-12.352 32.832 0.192 45.28l353.312 350.112c0.544 0.544 1.248 0.672 1.792 1.184 0.128 0.128 0.16 0.288 0.288 0.416 6.24 6.176 14.4 9.28 22.528 9.28 8.224 0 16.48-3.168 22.72-9.472l350.112-353.312C902.976 363.616 902.88 343.36 890.336 330.912z',
    reload: 'M939.456 256.224c-16.672-5.984-34.976 2.72-40.896 19.36l-24.768 69.344c-28.992-65.312-74.784-122.72-133.088-165.92C555.328 41.728 291.296 79.232 152.32 262.656c-67.264 88.768-95.616 198.176-79.84 308.032 15.84 110.304 74.208 207.776 164.352 274.496 75.424 55.808 163.808 82.752 251.456 82.752 128.032 0 254.56-57.44 336.992-166.272 36.48-48.128 61.472-102.08 74.208-160.416 3.776-17.248-7.136-34.304-24.416-38.08-17.216-3.712-34.304 7.104-38.08 24.416-10.784 49.184-31.872 94.752-62.72 135.456-117.888 155.52-341.92 187.232-499.392 70.72-76.288-56.48-125.664-138.912-139.072-232.16-13.344-92.8 10.656-185.248 67.488-260.288 117.856-155.584 341.792-187.424 499.328-70.848 57.024 42.24 99.84 100.608 122.976 166.624l-109.984-42.944c-16.416-6.368-35.008 1.696-41.44 18.176-6.432 16.48 1.728 35.008 18.176 41.44l161.856 63.2c3.808 1.472 7.744 2.208 11.616 2.208 0.544 0 1.024-0.192 1.568-0.224 1.216 0.128 2.432 0.64 3.648 0.64 13.12 0 25.472-8.16 30.112-21.248l57.632-161.184C964.768 280.48 956.096 262.144 939.456 256.224z',
    check: 'M852.504 323.84 783.664 255 405.629 633.91 239.84 468.594 171 537.434l235.375 233.847 68.27-68.555-0.079-0.078L852.504 323.84zM852.504 323.84',
    arrow: 'M325.456471 862.280661M882.057788 862.280661M236.028491 877.160382M960.132455 877.160382M63.683483 788.736998M958.469023 788.736998M64.77753 858.792098M163.396533 289.168875c-40.577772 0-66.525252 54.184545-35.441258 85.258218L477.217578 723.704878c20.031716 20.031716 49.823841 20.031716 69.853837 0l349.274345-349.277785c30.304744-30.294423 6.677812-85.258218-34.928639-85.258218L163.396533 289.168875 163.396533 289.168875zM959.523505 858.792098',
    more: 'M223.962372 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S276.942718 607.897867 223.962372 607.897867zM511.913993 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S564.894339 607.897867 511.913993 607.897867zM800.037628 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S852.84596 607.897867 800.037628 607.897867z',
    vv: 'M192 498.874182 540.625455 162.001455c17.128727-17.035636 21.085091-40.704 8.866909-52.852364-12.264727-12.148364-36.096-8.215273-53.224727 8.820364L137.565091 464.593455c-10.170182 10.100364-15.546182 22.481455-15.825455 33.466182-0.023273 0.465455-0.093091 0.930909-0.093091 1.396364 0 0.488727 0.069818 0.977455 0.093091 1.466182 0.279273 11.147636 5.794909 23.761455 16.104727 34.001455l361.960727 351.418182c17.431273 17.314909 41.658182 21.341091 54.109091 8.96 12.450909-12.357818 8.424727-36.421818-9.006545-53.783273L192 498.874182zM862.882909 841.472 509.998545 498.850909 858.600727 162.001455c17.128727-17.035636 21.108364-40.704 8.866909-52.852364s-36.072727-8.215273-53.201455 8.820364L455.540364 464.593455c-10.193455 10.123636-15.569455 22.551273-15.825455 33.536-0.023273 0.418909-0.069818 0.837818-0.093091 1.256727 0 0.535273 0.069818 1.047273 0.116364 1.582545 0.325818 11.147636 5.794909 23.691636 16.081455 33.931636l361.960727 351.418182c17.454545 17.314909 41.681455 21.341091 54.132364 8.96C884.363636 882.897455 880.314182 858.810182 862.882909 841.472z',
    search: 'M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z'
}
export default {
    name: 'y-svg',
    data () {
        return {
            svg
        }
    },
    props: {
        type: {
            type: String,
            default: 'info'
        },
        color: {
            type: String,
            default: '#999'
        },
        width: {
            type: Number,
            default: 24
        }
    }
}
</script>