export interface GalleryPhoto {
  id: string;
  slug: string;
  data: {
    image: string;
    caption: string;
    order: number;
  };
}

export const gallery: GalleryPhoto[] = [
  { id: "gallery-01", slug: "gallery-01", data: { image: "https://pub-488a24026ed4411b8d591260b603cdd1.r2.dev/dojo/DOJO_04.webp",              caption: "道場稽古の様子",           order: 1 } },
  { id: "gallery-02", slug: "gallery-02", data: { image: "https://pub-488a24026ed4411b8d591260b603cdd1.r2.dev/dojo/DOJO_05.webp",              caption: "道場稽古の様子",           order: 2 } },
  { id: "gallery-03", slug: "gallery-03", data: { image: "https://pub-488a24026ed4411b8d591260b603cdd1.r2.dev/dojo/DOJO_07.webp",              caption: "道場稽古の様子",           order: 3 } },
  { id: "gallery-04", slug: "gallery-04", data: { image: "https://pub-488a24026ed4411b8d591260b603cdd1.r2.dev/dojo/DOJO_08.webp",              caption: "道場稽古の様子",           order: 4 } },
  { id: "gallery-05", slug: "gallery-05", data: { image: "https://pub-488a24026ed4411b8d591260b603cdd1.r2.dev/shiatsu/SHIATSU_DO_02.webp",    caption: "指圧道の稽古",             order: 5 } },
  { id: "gallery-06", slug: "gallery-06", data: { image: "https://pub-488a24026ed4411b8d591260b603cdd1.r2.dev/biography/SOKE_JOE_MILLER.webp", caption: "宗家ジョー・ミラー師範",  order: 6 } },
  { id: "gallery-07", slug: "gallery-07", data: { image: "https://pub-488a24026ed4411b8d591260b603cdd1.r2.dev/parts/big-photo0000-6654.jpg",   caption: "道場行事の様子",           order: 7 } },
];

export interface Certificate {
  id: string;
  slug: string;
  data: {
    image: string;
    caption: string;
    order: number;
  };
}

export const certificates: Certificate[] = [
  { id: "cert-01", slug: "cert-01", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_01.webp", caption: "認定証 1",  order: 1  } },
  { id: "cert-02", slug: "cert-02", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_02.webp", caption: "認定証 2",  order: 2  } },
  { id: "cert-03", slug: "cert-03", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_03.webp", caption: "認定証 3",  order: 3  } },
  { id: "cert-04", slug: "cert-04", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_04.webp", caption: "認定証 4",  order: 4  } },
  { id: "cert-05", slug: "cert-05", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_05.webp", caption: "認定証 5",  order: 5  } },
  { id: "cert-06", slug: "cert-06", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_06.webp", caption: "認定証 6",  order: 6  } },
  { id: "cert-07", slug: "cert-07", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_07.webp", caption: "認定証 7",  order: 7  } },
  { id: "cert-08", slug: "cert-08", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_08.webp", caption: "認定証 8",  order: 8  } },
  { id: "cert-09", slug: "cert-09", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_09.webp", caption: "認定証 9",  order: 9  } },
  { id: "cert-10", slug: "cert-10", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_10.webp", caption: "認定証 10", order: 10 } },
  { id: "cert-11", slug: "cert-11", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_11.webp", caption: "認定証 11", order: 11 } },
  { id: "cert-12", slug: "cert-12", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_12.webp", caption: "認定証 12", order: 12 } },
  { id: "cert-13", slug: "cert-13", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_13.webp", caption: "認定証 13", order: 13 } },
  { id: "cert-14", slug: "cert-14", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_14.webp", caption: "認定証 14", order: 14 } },
  { id: "cert-15", slug: "cert-15", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_15.webp", caption: "認定証 15", order: 15 } },
  { id: "cert-16", slug: "cert-16", data: { image: "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images/dojo/CERTIFICATION_16.webp", caption: "認定証 16", order: 16 } },
];
