export default {
  name: "signIn",
  title: "Sign In",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule) => Rule.required().min(6).max(128),
    },
  ],
};
