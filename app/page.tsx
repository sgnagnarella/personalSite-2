import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`Seba Gnagnarella is an Engineering Director at Google, where he leads the DeveloperX App Platform team. He has over 10 years of experience in engineering and product leadership, building platforms and tools that help developers create, monitor, and optimize their apps. He is also a Salesforce certified consultant, administrator, and platform developer, with a strong background in cloud computing, databases, and agile methodologies.`}
      </p>
      <p className="mb-4">
        {` Prior to joining Google, Seba was the Head of Engineering for the FinOps Platform at Amazon Web Services (AWS), where he developed products and services that enabled customers and developers to manage and reduce their cloud cost and usage. He also served as CTO and CPO for Four Winds Interactive, SVP of Technology and IT at Inspirato, and Chief Architect and Director of Client Solutions at TTEC. He holds a BS in Computer Sciences from Universidad de Buenos Aires and is fluent in English, Portuguese, and Spanish.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
