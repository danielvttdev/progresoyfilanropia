import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(120),
    description: z.string().max(300),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    category: z.enum([
      'noticias',
      'eventos',
      'historias-de-impacto',
      'analisis',
      'transparencia',
      'anuncios',
    ]),
    draft: z.boolean().default(false),
  }),
});

const proyectosCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(250),
    category: z.enum([
      'sanitaria', 'economica', 'cultural',
      'ambiental', 'cientifica', 'educativa'
    ]),
    status: z.enum(['activo', 'finalizado']),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable().default(null),
    location: z.string().optional(),
    impact: z.object({
      beneficiaries: z.number().optional(),
      workshops: z.number().optional(),
      volunteers: z.number().optional(),
    }).optional(),
    allies: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = {
  blog: blogCollection,
  proyectos: proyectosCollection,
};
