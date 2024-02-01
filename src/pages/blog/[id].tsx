import { BlogDetail } from "@/interface/blog";
import { GetServerSideProps } from "next";
import { AppContext } from "next/app";
import { getBlogDetail } from "server/blogs";
import parse from 'html-react-parser';
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import BlogPage from "@/components/pages/BlogPage/BlogPage";
import { MainLayout } from "@/components/layouts/main-layout";
import { BaseLayout } from "@/components/layouts/base-layout/BaseLayout";
import StickLayout from "@/components/layouts/stick-layout/StickLayout";

export default function BlogRoute({ blogData }: { blogData: BlogDetail }) {


  return (
    <MainLayout title={blogData.title ?? 'Blog Detail'}>


      {/* <div className="container mx-auto relative bg-white">
        <div className="page-title">
          <h1>Creative Packaging Supplies &amp; Custom Shipping Supplies</h1>
        </div>
      </div> */}
      <BlogPage blogData={blogData} />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const route: string[] | string | undefined = context.query.id;

  if (!!!route) return {
    props: {
      blogData: {}
    }, // will be passed to the page component as props
  }

  const id = Number(route)
  const post: BlogDetail = await getBlogDetail(id);

  // console.log('HTML::', post.bodyHTML)

  return {
    props: {
      blogData: post
    }, // will be passed to the page component as props
  }
}
